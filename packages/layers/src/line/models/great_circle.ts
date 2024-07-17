import {
  AttributeType,
  gl,
  IAnimateOption,
  IEncodeFeature,
  ILayerConfig,
  IModel,
  IModelUniform,
  ITexture2D,
  CoordinateSystem
} from '@antv/l7-core';
import { rgb2arr } from '@antv/l7-utils';
import BaseModel from '../../core/BaseModel';
import { ILineLayerStyleOptions } from '../../core/interface';
import { LineArcTriangulation } from '../../core/triangulation';
import line_arc_frag from '../shaders/line_arc_great_circle_frag.glsl';
import line_arc2d_vert from '../shaders/line_arc_great_circle_vert.glsl';
import { interpolate } from '../../../../utils/src/lineAtOffset/greatCircle';
import { transformOffset } from '../../../../maps/src/mapbox/utils';

const lineStyleObj: { [key: string]: number } = {
  solid: 0.0,
  dash: 1.0,
};

export default class GreatCircleModel extends BaseModel {
  protected texture: ITexture2D;
  public getUninforms(): IModelUniform {
    const {
      opacity = 1,
      sourceColor,
      targetColor,
      textureBlend = 'normal',
      lineType = 'solid',
      dashArray = [10, 5],
      lineTexture = false,
      iconStep = 100,
      segmentNumber = 30,
    } = this.layer.getLayerConfig() as Partial<ILineLayerStyleOptions>;
    if (dashArray.length === 2) {
      dashArray.push(0, 0);
    }

    if (this.rendererService.getDirty()) {
      this.texture.bind();
    }

    // 转化渐变色
    let useLinearColor = 0; // 默认不生效
    let sourceColorArr = [0, 0, 0, 0];
    let targetColorArr = [0, 0, 0, 0];
    if (sourceColor && targetColor) {
      sourceColorArr = rgb2arr(sourceColor);
      targetColorArr = rgb2arr(targetColor);
      useLinearColor = 1;
    }

    return {
      u_opacity: opacity,
      u_textureBlend: textureBlend === 'normal' ? 0.0 : 1.0,
      segmentNumber,
      u_line_type: lineStyleObj[lineType as string] || 0.0,
      u_dash_array: dashArray,

      // 纹理支持参数
      u_texture: this.texture, // 贴图
      u_line_texture: lineTexture ? 1.0 : 0.0, // 传入线的标识
      u_icon_step: iconStep,
      u_textSize: [1024, this.iconService.canvasHeight || 128],

      // 渐变色支持参数
      u_linearColor: useLinearColor,
      u_sourceColor: sourceColorArr,
      u_targetColor: targetColorArr,
    };
  }
  public getAnimateUniforms(): IModelUniform {
    const { animateOption } = this.layer.getLayerConfig() as ILayerConfig;
    return {
      u_animate: this.animateOption2Array(animateOption as IAnimateOption),
      u_time: this.layer.getLayerAnimateTime(),
    };
  }

  public async initModels(): Promise<IModel[]> {
    this.updateTexture();
    this.iconService.on('imageUpdate', this.updateTexture);

    return this.buildModels();
  }

  public clearModels() {
    this.texture?.destroy();
    this.iconService.off('imageUpdate', this.updateTexture);
  }

  public async buildModels(): Promise<IModel[]> {
    const { segmentNumber } = this.getUninforms();
    const model = await this.layer.buildLayerModel({
      moduleName: 'lineGreatCircle',
      vertexShader: line_arc2d_vert,
      fragmentShader: line_arc_frag,
      triangulation: LineArcTriangulation,
      depth: { enable: false },
      segmentNumber,
    });
    return [model];
  }
  protected registerBuiltinAttributes() {
    this.styleAttributeService.registerStyleAttribute({
      name: 'size',
      type: AttributeType.Attribute,
      descriptor: {
        name: 'a_Size',
        buffer: {
          // give the WebGL driver a hint that this buffer may change
          usage: gl.DYNAMIC_DRAW,
          data: [],
          type: gl.FLOAT,
        },
        size: 1,
        update: (feature: IEncodeFeature) => {
          const { size = 1 } = feature;
          return Array.isArray(size) ? [size[0]] : [size as number];
        },
      },
    });

    this.styleAttributeService.registerStyleAttribute({
      name: 'instance', // 弧线起始点信息
      type: AttributeType.Attribute,
      descriptor: {
        name: 'a_Instance',
        buffer: {
          usage: gl.STATIC_DRAW,
          data: [],
          type: gl.FLOAT,
        },
        size: 4,
        update: (
          feature: IEncodeFeature,
          featureIdx: number,
          vertex: number[],
        ) => {
          const { originCoordinates } = feature;
          if (originCoordinates && this.mapService.version === 'MAPBOX') {
            const [source, target] = originCoordinates;
            return [source[0], source[1], target[0], target[1]];
          } else {
            return [vertex[3], vertex[4], vertex[5], vertex[6]];
          }
        },
      },
    });

    this.styleAttributeService.registerStyleAttribute({
      name: 'Position1',
      type: AttributeType.Attribute,
      descriptor: {
        name: 'a_Position1',
        buffer: {
          usage: gl.STATIC_DRAW,
          data: [],
          type: gl.FLOAT,
        },
        size: 4,
        update: (
          feature: IEncodeFeature,
          featureIdx: number,
          vertex: number[],
        ) => {
          const { coordinates, originCoordinates } = feature;
          const [source, target] = originCoordinates || coordinates;
          const a_Instance = [source[0], source[1], target[0], target[1]];
          const { segmentNumber } = this.getUninforms();
          const a_Position =
            vertex.length === 2
              ? [vertex[0], vertex[1], 0]
              : [vertex[0], vertex[1], vertex[2]];
          const { currentDegree, nextDegree } = this.handleGLSL(
            a_Instance,
            a_Position,
            segmentNumber,
          );
          if (originCoordinates && this.mapService.version === 'MAPBOX') {
            const res = this.transformMapboxOffset(currentDegree, nextDegree);
            return res;
          } else {
            return [...currentDegree, ...nextDegree];
          }
        },
      },
    });

    this.styleAttributeService.registerStyleAttribute({
      name: 'uv',
      type: AttributeType.Attribute,
      descriptor: {
        name: 'a_iconMapUV',
        buffer: {
          // give the WebGL driver a hint that this buffer may change
          usage: gl.DYNAMIC_DRAW,
          data: [],
          type: gl.FLOAT,
        },
        size: 2,
        update: (feature: IEncodeFeature) => {
          const iconMap = this.iconService.getIconMap();
          const { texture } = feature;
          // console.log('icon feature', feature)
          const { x, y } = iconMap[texture as string] || { x: 0, y: 0 };
          return [x, y];
        },
      },
    });
  }

  handleGLSL(a_Instance: number[], a_Position: number[], segmentNumber: any) {
    const getSegmentRatio = (index: number) => {
      return index / (segmentNumber - 1);
    };
    const mix = (x: number, y: number, a: number) => x * (1 - a) + y * a;
    const step = (a: number, x: number) => (x < a ? 0 : 1);

    const source = [a_Instance[0], a_Instance[1]];
    const target = [a_Instance[2], a_Instance[3]];

    const segmentIndex = a_Position[0];
    const segmentRatio = getSegmentRatio(segmentIndex);
    const indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));
    const nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);
    const currentDegree = interpolate(
      source,
      target,
      segmentRatio,
      this.mapService.version,
    );
    const nextDegree = interpolate(
      source,
      target,
      nextSegmentRatio,
      this.mapService.version,
    );
    return { currentDegree, nextDegree };
  }

  private transformMapboxOffset(currentDegree: number[], nextDegree: number[]) {
    let curr = transformOffset(currentDegree, this.mapService.map, 512);
    let next = transformOffset(nextDegree, this.mapService.map, 512);
    if (
      this.mapService.coordinateSystemService.getCoordinateSystem() ===
      CoordinateSystem.METER_OFFSET
    ) {
      const offsetCenterTransform =
        this.mapService.coordinateSystemService.offsetCenterTransform;
      curr = [
        curr[0] - offsetCenterTransform[0],
        curr[1] - offsetCenterTransform[1],
      ];
      next = [
        next[0] - offsetCenterTransform[0],
        next[1] - offsetCenterTransform[1],
      ];
    }
    return [...curr, ...next];
  }

  private updateTexture = () => {
    const { createTexture2D } = this.rendererService;
    if (this.texture) {
      this.texture.update({
        data: this.iconService.getCanvas(),
      });
      this.layer.render();
      return;
    }
    this.texture = createTexture2D({
      data: this.iconService.getCanvas(),
      mag: gl.NEAREST,
      min: gl.NEAREST,
      premultiplyAlpha: false,
      width: 1024,
      height: this.iconService.canvasHeight || 128,
    });
  };
}
