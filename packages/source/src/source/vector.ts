import { Feature, Properties } from '@turf/helpers';
import { VectorTile } from '@mapbox/vector-tile';
import Protobuf from 'pbf';
import { ITileSource } from '../interface';
import { toLngLat } from '@antv/l7-maps/src/utils/mapbox-maplibre-utils'
import { global } from '@antv/l7-maps/src/utils/mapInstance'


export default class VectorSource implements ITileSource {
  private vectorTile: VectorTile;
  private vectorLayerCache: {
    [key: string]: Array<Feature<GeoJSON.Geometry, Properties>>;
  } = {};
  private x: number;
  private y: number;
  private z: number;
  private version?: string;

  constructor(data: ArrayBuffer, x: number, y: number, z: number, version?:string) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.version = version;
    const Map = this.version === 'MAPLIBRE' ? window.maplibregl : window.mapboxgl;
    const MultiVectorTile = Map.mapbox.VectorTile;
    this.vectorTile = new MultiVectorTile(new Protobuf(data)) as VectorTile;
  }

  public getTileData(sourceLayer: string) {
    if (!sourceLayer || !this.vectorTile.layers[sourceLayer]) {
      return [];
    }
    // 优先走缓存
    if (this.vectorLayerCache[sourceLayer]) {
      return this.vectorLayerCache[sourceLayer];
    }

    const vectorTile = this.vectorTile.layers[sourceLayer];

    // @ts-ignore
    if (Array.isArray(vectorTile.features)) {
      // 数据不需要被解析 geojson-vt 类型
      // @ts-ignore
      this.vectorLayerCache[sourceLayer] = vectorTile.features;
      // @ts-ignore
      return vectorTile.features;
    }

    const features: Array<Feature<GeoJSON.Geometry, Properties>> = [];
    for (let i = 0; i < vectorTile.length; i++) {
      const vectorTileFeature = vectorTile.feature(i);
      // const toLngLat = map.getCRS().toWGS84
      const toLngLat1 = function (x, y) {
        const forward = toLngLat([x, y], global.map)
        return forward;
    };
      const feature = vectorTileFeature.toGeoJSON(this.x, this.y, this.z, toLngLat1);

      features.push({
        ...feature,
        properties: {
          id: feature.id,
          ...feature.properties,
        },
      });
    }
    this.vectorLayerCache[sourceLayer] = features;
    return features;
  }
  public getFeatureById() {
    throw new Error('Method not implemented.');
  }
}
