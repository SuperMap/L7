import mapboxgl from 'mapbox-gl';
import { getScaleByZoom } from '../viewport-mercator-project';

// mapboxgl多坐标系，投影计算
export function getMultiCoorCoordinates(
  coor: [number, number] | undefined,
  map: mapboxgl.Map | maplibregl.Map,
) {
  if (!coor) return;
  const [lng, lat] = coor || [];
  // @ts-ignore
  return map.getCRS().fromWGS84([lng, lat]);
}
// mapboxgl多坐标系，获取extent
export function getMultiCoorExtent(map: mapboxgl.Map) {
  // @ts-ignore
  return map.getCRS().getExtent();
}

export function transformToMultiCoor(
  lnglat: [number, number],
  map: mapboxgl.Map,
  worldScale?: 512,
): [number, number] {
  if (!map || !isMultiCoor(map)) {
    return lnglat;
  }
  const zoom = map.getZoom();
  const coor = getMultiCoorCoordinates(lnglat, map);
  const extent = getMultiCoorExtent(map);
  const worldScales = worldScale || getScaleByZoom(zoom);
  const width = extent[2] - extent[0];
  const height = extent[3] - extent[1];
  const xScale = ((coor[0] - extent[0]) / width) * worldScales + 0;
  const yScale =
    ((extent[3] - coor[1]) / height) * worldScales - worldScales / 4;
  return [xScale, yScale];
}

export function isMultiCoor(map: any): boolean {
  if (!map) {
    return false;
  }
  // @ts-ignore
  if (mapboxgl.CRS) {
    // @ts-ignore
    return map.getCRS()?.epsgCode !== 'EPSG:3857';
  }

  return false;
}
