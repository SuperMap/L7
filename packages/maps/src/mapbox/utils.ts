import mapboxgl from 'mapbox-gl';
import { CoordinateSystem } from '../../../core/src/services/coordinate/ICoordinateSystemService';
import { getScaleByZoom } from '../viewport-mercator-project';

const LNGLAT_OFFSET_ZOOM_THRESHOLD = 12;
// mapboxgl多坐标系，投影计算
export function fromWGS84(
  coor: [number, number] | undefined,
  map: mapboxgl.Map | maplibregl.Map,
) {
  if (!coor) return;
  const [lng, lat] = coor || [];
  // @ts-ignore
  return map.getCRS().fromWGS84([lng, lat]);
}

export function toWGS84(
  coor: [number, number] | undefined,
  map: mapboxgl.Map | maplibregl.Map,
) {
  if (!coor) return;
  const [x, y] = coor || [];
  // @ts-ignore
  return map.getCRS().toWGS84([x, y]);
}
export function toLngLat(
  coor: [number, number] | undefined,
  map: mapboxgl.Map | maplibregl.Map,
) {
  if (!coor) return;
  const [x, y] = coor || [];
  // @ts-ignore
 const {lng, lat}= map.getCRS().toLngLat(x, y);
 return [lng, lat];
}


// mapboxgl多坐标系，获取extent
export function getCRSExtent(map: mapboxgl.Map) {
  // @ts-ignore
  return map.getCRS().getExtent();
}

export function transformToMultiCoor(
  lnglat: [number, number],
  map: mapboxgl.Map,
  worldScale?: 512,
): [number, number] {
  return transformOffset(lnglat, map, worldScale);
}

export function transformOffset(
  originCoor: Array<number>,
  map: mapboxgl.Map,
  worldScale?: number,
  targetLnglat?: [number, number],
): Array<number> {
  const lnglat: [number, number] = [originCoor[0], originCoor[1]];
  const z = originCoor.slice(2);
  if (!map) {
    return originCoor;
  }
  const zoom = map.getZoom();
  const coor = fromWGS84(lnglat, map);
  const extent = getCRSExtent(map);
  const worldScales = worldScale || getScaleByZoom(zoom);
  const width = extent[2] - extent[0];
  const height = extent[3] - extent[1];
  const origin = targetLnglat
    ? fromWGS84(targetLnglat, map)
    : [extent[0], extent[3]];
  const xScale = ((coor[0] - origin[0]) / width) * worldScales;
  const yScale = ((origin[1] - coor[1]) / height) * worldScales;
  return [xScale, yScale, ...z];
}
export function transformLnglat(
  xy: [number, number],
  map: mapboxgl.Map,
  worldScale?: number,
  targetLnglat?: [number, number],
): [number, number] {
  if (!map) {
    return xy;
  }

  const zoom = map.getZoom();
  const worldScales = worldScale || getScaleByZoom(zoom);
  const extent = getCRSExtent(map);
  const width = extent[2] - extent[0];
  const height = extent[3] - extent[1];
  const origin = targetLnglat
    ? fromWGS84(targetLnglat, map)
    : [extent[0], extent[3]];
  const y = origin[1] - (xy[1] / worldScales) * height;
  const x = (xy[0] / worldScales) * width + origin[0];
  return toWGS84([x, y], map);
}

export function isMultiCoor(map: any): boolean {
  if (!map) {
    return false;
  }
  return true;
}
export function getCoordinateSystem(
  map: any,
  offsetCoordinate = true,
): boolean {
  if (!map) {
    return false;
  }
  if (map.getZoom() > LNGLAT_OFFSET_ZOOM_THRESHOLD && offsetCoordinate) {
    const crs = map.getCRS();
    if (
      crs &&
      (crs.unit === 'degrees' ||
        crs.unit === 'degree' ||
        crs.epsgCode === 'EPSG:3857')
    ) {
      return CoordinateSystem.LNGLAT_OFFSET;
    } else {
      return CoordinateSystem.METER_OFFSET;
    }
  } else {
    return CoordinateSystem.LNGLAT;
  }
}
// 当前级别一张瓦片代表的地理宽度
function getResolutionRatio(zoom:number, map: mapboxgl.Map) {
  const extent = getCRSExtent(map);
  const width = extent[2] - extent[0];
  const height = extent[3] - extent[1];
  const ratio_0 = Math.max(width, height) / 512;
  const ratio = ratio_0 / Math.pow(2, zoom);
  return ratio * 512;
}
export function getTileXY(lnglat: [number, number], z:number, map: mapboxgl.Map) {
  // 当前级别一张瓦片代表的地理宽度
  const ratio = getResolutionRatio(z, map);
  const extent = getCRSExtent(map);
  const [x, y] = fromWGS84(lnglat, map);

  const tileX = (x - extent[0]) / ratio;
  const tileY = (extent[3] - y) / ratio;
  return [Math.floor(tileX), Math.floor(tileY)];
}
