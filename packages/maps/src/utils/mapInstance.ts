const global = {};
function setMap(map: any) {
  global.map = map;
}
function getMap() {
  return global.map;
}
export { global, setMap, getMap };
