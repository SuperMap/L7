import { DOM } from '@antv/l7-utils';
import ScreenFull from 'screenfull';
import { createL7Icon } from '../utils/icon';
import ButtonControl, {
  IButtonControlOption,
} from './baseControl/buttonControl';

export interface IFullscreenControlOption extends IButtonControlOption {
  exitBtnText: IButtonControlOption['btnText'];
  exitBtnIcon: IButtonControlOption['btnIcon'];
  exitTitle: IButtonControlOption['title'];
}

export { Fullscreen };

export default class Fullscreen extends ButtonControl<
  IFullscreenControlOption
> {
  protected isFullscreen = false;

  protected mapContainer: HTMLElement;

  public onAdd(): HTMLElement {
    const button = super.onAdd();
    button.addEventListener('click', this.onClick);
    this.mapContainer = DOM.getContainer(this.scene.getSceneConfig().id!);
    this.mapContainer.addEventListener(
      'fullscreenchange',
      this.onFullscreenChange,
    );
    return button;
  }

  public onRemove() {
    super.onRemove();
    this.mapContainer.removeEventListener(
      'fullscreenchange',
      this.onFullscreenChange,
    );
  }

  public getDefault(
    option?: Partial<IFullscreenControlOption>,
  ): IFullscreenControlOption {
    return {
      ...super.getDefault(option),
      btnIcon: createL7Icon('l7-icon-FullScreen'),
      title: '全屏',
      btnText: '全屏',
      exitTitle: '退出全屏',
      exitBtnIcon: createL7Icon('l7-icon-ExitFullScreen'),
    };
  }

  protected onClick = async () => {
    if (ScreenFull.isEnabled) {
      await ScreenFull.toggle(this.mapContainer);
    }
  };

  protected onFullscreenChange = () => {
    this.isFullscreen = !!document.fullscreenElement;

    const {
      btnText,
      btnIcon,
      title,
      exitBtnText,
      exitBtnIcon,
      exitTitle,
    } = this.controlOption;
    if (this.isFullscreen) {
      this.setBtnTitle(exitTitle);
      this.setBtnText(exitBtnText);
      this.setBtnIcon(exitBtnIcon);
    } else {
      this.setBtnTitle(title);
      this.setBtnText(btnText);
      this.setBtnIcon(btnIcon);
    }

    this.emit('fullscreenchange', this.isFullscreen);
  };
}
