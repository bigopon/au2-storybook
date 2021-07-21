import { bindable, customElement } from "aurelia";

@customElement({
  name: 'my-button',
  template:
`<template style="font-size: \${size === 'medium' ? 12 : 16}px;">
  <span>\${text}</span>
</template>`
})
export class MyButton {
  @bindable
  text

  @bindable
  size
}
