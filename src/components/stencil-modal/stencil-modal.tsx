import { Component, h, Prop, getAssetPath, State, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'stencil-modal',
  styleUrl: 'stencil-modal.css',
  shadow: true,
  assetsDirs: ['asset'],
})
export class StencilModal {
  @Prop({
    mutable: true,
    reflect: true,
  })
  isopen: boolean;
  @Prop() header: string;
  @Prop() appearance: string;
  @Prop() closeIcon = 'x.svg';
  @Prop() buttons: string;

  @State() _buttons: Array<any>;

  @Watch('buttons') objectDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._buttons = JSON.parse(newValue);
    } else {
      this._buttons = newValue;
    }
  }

  componentWillLoad() {
    this.objectDataWatcher(this.buttons);
  }

  @Event() private action: EventEmitter;

  private handleCancel = () => {
    this.isopen = false;
  };

  private handleAction = () => {
    this.action.emit();
  };

  render() {
    return (
      <div class={this.isopen ? 'modal-wrapper isopen' : 'modal-wrapper'}>
        <div class="modal-overlay" onClick={this.handleCancel}>
          <div class="modal">
            <div class="header">
              <h6>{this.header}</h6>
              <div class="close">
                <img src={getAssetPath(`./asset/${this.closeIcon}`)} alt="close icon" />
              </div>
            </div>
            <div class="body">
              <slot />
            </div>
            <div class="footer">
              {this._buttons.map((button, index) => {
                return (
                  <stencil-button
                    onClick={index === 0 ? this.handleAction : this.handleCancel}
                    text={button.text}
                    appearance={index === 0 && this.appearance}
                  ></stencil-button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
