import {
  AttributeType,
  CoordinateSystem,
  gl,
  IEncodeFeature,
  IModel,
  IModelUniform,
} from '@antv/l7-core';
import BaseModel from '../../core/BaseModel';
import { IHeatMapLayerStyleOptions } from '../../core/interface';
import { PointExtrudeTriangulation } from '../../core/triangulation';
import heatmapGrid3dVert from '../shaders/hexagon_3d_vert.glsl';
import heatmapGridFrag from '../shaders/hexagon_frag.glsl';
import { mat2, vec2, vec4 } from 'gl-matrix';
import { transformLnglat, transformOffset } from '../../../../maps/src/mapbox';
export default class Grid3DModel extends BaseModel {
  public getUninforms(): IModelUniform {
    const { opacity, coverage, angle } =
      this.layer.getLayerConfig() as IHeatMapLayerStyleOptions;
    return {
      u_opacity: opacity || 1.0,
      u_coverage: coverage || 1.0,
      u_angle: angle || 0,
      u_radius: [
        this.layer.getSource().data.xOffset,
        this.layer.getSource().data.yOffset,
      ],
    };
  }

  public async initModels(): Promise<IModel[]> {
    return this.buildModels();
  }

  public async buildModels(): Promise<IModel[]> {
    const model = await this.layer.buildLayerModel({
      moduleName: 'heatmapGrid3d',
      vertexShader: heatmapGrid3dVert,
      fragmentShader: heatmapGridFrag,
      triangulation: PointExtrudeTriangulation,
      primitive: gl.TRIANGLES,
      depth: { 
        enable: true,
        // @ts-ignore
        range: [0, 0.9]
      },
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
          usage: gl.DYNAMIC_DRAW,
          data: [],
          type: gl.FLOAT,
        },
        size: 1,
        update: (feature: IEncodeFeature) => {
          const { size } = feature;
          return Array.isArray(size) ? [size[0]] : [size as number];
        },
      },
    });

    this.styleAttributeService.registerStyleAttribute({
      name: 'normal',
      type: AttributeType.Attribute,
      descriptor: {
        name: 'a_Normal',
        buffer: {
          usage: gl.STATIC_DRAW,
          data: [],
          type: gl.FLOAT,
        },
        size: 3,
        update: (
          feature: IEncodeFeature,
          featureIdx: number,
          vertex: number[],
          attributeIdx: number,
          normal: number[],
        ) => {
          return normal;
        },
      },
    });
    this.styleAttributeService.registerStyleAttribute({
      name: 'pos', // 顶点经纬度位置
      type: AttributeType.Attribute,
      descriptor: {
        name: 'a_Pos',
        buffer: {
          usage: gl.DYNAMIC_DRAW,
          data: [],
          type: gl.FLOAT,
        },
        size: 3,
        update: (feature: IEncodeFeature,featureIdx: number,vertice) => {
          let coordinates;
          if (feature.version === 'GAODE2.x') {
            coordinates = feature.originCoordinates;
          } else {
            const { coverage = 1, angle } = this.layer.getLayerConfig() as IHeatMapLayerStyleOptions;
            const { xOffset, yOffset } = this.layer.getSource().data;
            const rotationMatrix = mat2.create();
            mat2.rotate(rotationMatrix, rotationMatrix, angle);
            const offset = vec2.create();
            const vertices = vec2.fromValues(vertice[0], vertice[1]);
            vec2.multiply(offset, vertices, vec2.fromValues(xOffset, yOffset));
            vec2.multiply(offset, offset, vec2.fromValues(coverage, coverage));
            vec2.transformMat2(offset, offset, rotationMatrix);
            const lngLat = transformLnglat(
              [feature.coordinates[0] + offset[0], feature.coordinates[1] + offset[1]],
              this.mapService.map,
              256 << 20,
            );
            if (this.mapService.coordinateSystemService.getCoordinateSystem() === CoordinateSystem.LNGLAT_OFFSET) {
              coordinates = lngLat;
            } else {
              coordinates = transformOffset(lngLat, this.mapService.map, 512);
            }
          }
          return [coordinates[0], coordinates[1], 0];
        },
      },
    });
  }
}
