import '@polymer/iron-icons/av-icons.js'
import '@polymer/iron-icons/communication-icons.js'
import '@polymer/iron-icons/device-icons.js'
import '@polymer/iron-icons/editor-icons.js'
import '@polymer/iron-icons/hardware-icons.js'
import { Component, h, Prop } from '@stencil/core'
import '../iron-icons/iron-icons.js'

@Component({
  tag: 'anim-iron-icon',
  styleUrl: 'anim-iron-icon.scss',
  shadow: false,
})
export class AnimIronIcon {
  @Prop() icon: string
  @Prop() animation: string
  @Prop() circle: string

  render() {
    let iconId: string
    try {
      iconId = this.icon.split(':')[1]
    } catch {
      iconId = null
    }

    return (
      <div class={'icon-' + iconId + ' ' + this.animation} innerHTML={this.findSvg(iconId)}></div>
    )
  }

  findSvg(iconId: string): string {
    let circleContent = ''
    if (this.circle) {
      circleContent =
        '<g class="circle"><path class="' +
        this.circle +
        '" d="M1.5,12C1.5,6.2,6.2,1.5,12,1.5S22.5,6.2,22.5,12S17.8,22.5,12,22.5S1.5,17.8,1.5,12z"/></g>'
    }

    if (iconId) {
      return (
        '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">' +
        document.getElementById(iconId).outerHTML +
        circleContent +
        '</svg>' +
        '<div class="item-bg"></div>'
      )
    } else {
      return (
        '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">' +
        circleContent +
        '</svg>' +
        '<div class="item-bg"></div>'
      )
    }
  }
}
