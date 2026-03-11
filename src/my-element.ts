import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

@customElement('my-element')
export class MyElement extends LitElement {
  @state()
  private count = 0

  render() {
    return html`
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = css`
    :host {
      display: block;
    }

    button {
      padding: 0.5rem 1.5rem;
      background-color: var(--blue-400);
      color: white;
      font-weight: 600;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #2563eb;
    }
  `
}
