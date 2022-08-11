import { DOM } from '@antv/l7-utils';
import { IButtonControlOption } from '../../interface';
import Control from './control';

export { ButtonControl };

export default abstract class ButtonControl extends Control<
  IButtonControlOption
> {
  /**
   * 当前按钮是否禁用
   * @protected
   */
  protected isDisable = false;

  /**
   * 按钮的 DOM
   * @protected
   */
  protected button?: HTMLElement;

  /**
   * 按钮中文本对应的 DOM
   * @protected
   */
  protected buttonText?: HTMLElement;

  /**
   * 按钮中图标对应的 DOM
   * @protected
   */
  protected buttonIcon?: HTMLElement;

  /**
   * 设置当前按钮
   * @param newIsDisable
   */
  public setIsDisable(newIsDisable: boolean) {
    this.isDisable = newIsDisable;
    if (newIsDisable) {
      this.button?.setAttribute('disabled', 'true');
    } else {
      this.button?.removeAttribute('disabled');
    }
  }

  public createButton(className: string = '') {
    return DOM.create(
      'button',
      `l7-button-control ${className}`,
    ) as HTMLElement;
  }

  public onAdd(): HTMLElement {
    this.button = this.createButton();
    this.isDisable = false;
    return this.button;
  }

  // tslint:disable-next-line:no-empty
  public onRemove(): void {
    this.button = this.buttonIcon = this.buttonText = undefined;
    this.isDisable = false;
  }

  public setOptions(newOptions: Partial<IButtonControlOption>) {
    const { title, btnText, btnIcon } = newOptions;
    if ('title' in newOptions) {
      this.button?.setAttribute('title', title ?? '');
    }
    if ('btnIcon' in newOptions) {
      this.updateButtonIcon(btnIcon);
    }
    if ('btnText' in newOptions) {
      this.updateButtonText(btnText);
    }
    super.setOptions(newOptions);
  }

  protected updateButtonIcon(newIcon: IButtonControlOption['btnIcon']) {
    if (this.buttonIcon) {
      DOM.remove(this.buttonIcon);
    }
    if (newIcon) {
      const firstChild = this.button?.firstChild;
      if (firstChild) {
        this.button?.insertBefore(newIcon, firstChild);
      } else {
        this.button?.appendChild(newIcon);
      }
      this.buttonIcon = newIcon;
    }
  }

  protected updateButtonText(newText: IButtonControlOption['btnText']) {
    if (newText) {
      let btnText = this.buttonText;
      if (!btnText) {
        btnText = DOM.create('div', 'l7-button-control__text') as HTMLElement;
        this.button?.appendChild(btnText);
        this.buttonText = btnText;
      }
      btnText.innerText = newText;
    } else if (!newText && this.buttonText) {
      DOM.remove(this.buttonText);
      this.buttonText = undefined;
    }
  }
}
