import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'stencil-button',
  styleUrl: 'stencil-button.css',
  shadow: true,
})
export class StencilButton {
  @Prop() text: string;
  @Prop() apperance: string;

  render() {
    return (
      <button class={`btn ${this.apperance}`} type="button">
        {this.text}
      </button>
    );
  }
}
