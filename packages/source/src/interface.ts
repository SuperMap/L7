export type DataType = string | object[] | object;
export type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface IFeatureKey {
  [key: string]: {
    index: number;
    idField: any;
  };
}
// 解析后返回数据类型
export interface IParseDataItem {
  coordinates: any[];
  _id: number;
  [key: string]: any;
}
export interface IParserData {
  [key: string]: any;
  dataArray: IParseDataItem[];
  // 瓦片地图数据字典
  featureKeys?: IFeatureKey;
}

export interface IJsonItem {
  [key: string]: any;
}
export type IJsonData = IJsonItem[];

export interface IRasterData {
  rasterData: HTMLImageElement | Uint8Array |  ImageBitmap | null | undefined;
  width: number;
  height: number;
}
export type IRasterFormat = (imageData: ArrayBuffer, bands: number[], channels?: string[]) => Promise<IRasterData|IRasterData[]>;
export interface IRasterFileData {
  data: ArrayBuffer;
  bands: number[];
}

export type IRgbOperation = {
  r?: any[];
  g?: any[]
  b?: any[]
};

export type IBandsOperation = ((bands: IRasterData[]) => Uint8Array | Array<number>) | any[] | IRgbOperation;

export type IRasterLayerData = number[] | IRasterFileData | IRasterFileData[];

export interface IRasterCfg {
  format?: IRasterFormat;
  operation?: IBandsOperation;
  extent: [number, number, number, number];
  width: number;
  height: number;
  max: number;
  min: number;
}