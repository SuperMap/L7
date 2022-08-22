import { createL7Icon } from '../utils/icon';
import SelectControl, {
  ISelectControlOption,
  OptionItem,
} from './baseControl/selectControl';

export interface MapStyleControlOption extends ISelectControlOption {
  mapType: string;
}

export { MapStyleControl };

const GaodeMapStyles: OptionItem[] = [
  {
    text: '',
    value: '',
    img: '',
  },
];

const MapboxMapStyles: OptionItem[] = [
  {
    text: '',
    value: '',
    img: '',
  },
];

export default class MapStyleControl extends SelectControl<
  MapStyleControlOption
> {
  public getIsMultiple(): boolean {
    return false;
  }

  public getDefault(
    option?: Partial<MapStyleControlOption>,
  ): MapStyleControlOption {
    return {
      ...super.getDefault(option),
      title: '地图样式',
      btnIcon: createL7Icon('l7-icon-color'),
      options: [],
    };
  }

  public onAdd(): any {
    let { options } = this.controlOption;
    if (!options.length) {
      // tslint:disable-next-line:prefer-conditional-expression
      if (this.mapsService.getType() === 'mapbox') {
        this.controlOption.options = options = MapboxMapStyles;
      } else {
        this.controlOption.options = options = GaodeMapStyles;
      }
    }
    // if (!defaultValue) {
    //   console.log(this.scene);
    //   console.log(this.sceneContainer);
    // }
    const button = super.onAdd();
    return button;
  }
}
