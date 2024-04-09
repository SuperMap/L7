export function transformToMultiCoor(lnglat, map, worldScale = 512) {
  if (!map) {
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
    ((extent[3] - coor[1]) / height) * worldScales;
  return [xScale, yScale];
}
