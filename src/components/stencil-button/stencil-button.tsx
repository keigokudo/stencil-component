import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stencil-button',
  styleUrl: 'stencil-button.css',
  shadow: true,
})
export class StencilButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
