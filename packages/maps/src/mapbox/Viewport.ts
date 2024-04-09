import { IMapCamera, IViewport } from '@antv/l7-core';
import WebMercatorViewport from '../viewport-mercator-project/web-mercator-viewport';
import { isMultiCoor } from './utils';

export default class Viewport implements IViewport {
  public viewport: WebMercatorViewport;
  private map: any;

  public syncWithMapCamera(mapCamera: Partial<IMapCamera>) {
    const { center, zoom, pitch, bearing, viewportHeight, viewportWidth, map } =
      mapCamera;
    this.map = map;
    /**
     * Deck.gl 使用的也是 Mapbox 同步相机，相机参数保持一致
     * 例如相机高度固定为 height * 1.5，因此不需要传
     */
    
    this.viewport = new WebMercatorViewport({
      width: viewportWidth,
      height: viewportHeight,
      longitude: center && center[0],
      latitude: center && center[1],
      zoom,
      pitch,
      bearing,
      isGeographicCoordinateSystem: isMultiCoor(map),
      map
    });
  }

  public getZoom(): number {
    return this.viewport.zoom;
  }

  public getZoomScale(): number {
    return Math.pow(2, this.getZoom());
  }

  public getCenter(): [number, number] {
    return [this.viewport.longitude, this.viewport.latitude];
  }

  public getProjectionMatrix(): number[] {
    return this.viewport.projectionMatrix;
  }

  public getModelMatrix(): number[] {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  }

  public getViewMatrix(): number[] {
    return this.viewport.viewMatrix;
  }

  public getViewMatrixUncentered(): number[] {
    // @ts-ignore
    return this.viewport.viewMatrixUncentered;
  }
  public getViewProjectionMatrix(): number[] {
    // @ts-ignore
    return this.viewport.viewProjectionMatrix;
  }

  public getViewProjectionMatrixUncentered(): number[] {
    // @ts-ignore
    return this.viewport.viewProjectionMatrix;
  }
  public getFocalDistance() {
    return 1;
  }

  public projectFlat(
    lngLat: [number, number],
    scale?: number | undefined,
  ): [number, number] {
    return this.viewport.projectFlat(lngLat, scale, isMultiCoor(this.map), this.map);
  }
}
