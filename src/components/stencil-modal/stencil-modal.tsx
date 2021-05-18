import { Component, Host, h, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'stencil-modal',
  styleUrl: 'stencil-modal.css',
  shadow: true,
  assetsDirs: ['asset'],
})
export class StencilModal {
  @Prop() closeIcon = 'x.svg';

  render() {
    return (
      <div class="modal-wrapper">
        <div class="modal-overlay">
          <div class="modal">
            <div class="header">
              <h6>Modal Header</h6>
              <div class="close">
                <img src={getAssetPath(`./asset/${this.closeIcon}`)} alt="close icon" />
              </div>
            </div>
            <div class="body">
              <slot />
            </div>
            <div class="footer">
              <stencil-button text="confirm" apperance="primary" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
