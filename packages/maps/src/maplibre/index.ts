import { Map } from 'mapbox-gl';
import { IMaplibreInstance } from '../../typings/index';
import BaseMapWrapper from '../utils/BaseMapWrapper';
import './logo.css';
import MaplibreService from './map';
export default class MaplibreWrapper extends BaseMapWrapper<
  Map & IMaplibreInstance
> {
  protected getServiceConstructor() {
    return MaplibreService;
  }
}
