import mapboxgl from 'mapbox-gl';
import { getScaleByZoom } from '../viewport-mercator-project';

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
  lnglat: [number, number],
  map: mapboxgl.Map,
  worldScale?: number,
  targetLnglat?: [number, number],
): [number, number] {
  if (!map) {
    return lnglat;
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
  return [xScale, yScale];
}

export function isMultiCoor(map: any): boolean {
  if (!map) {
    return false;
  }
  return true;
}
