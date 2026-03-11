import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('about-page')
export class AboutPage extends LitElement {
  static styles = css``;

  render() {
    return html`
      <div>
        <h1>About Us</h1>
        <p>This is the about page</p>
      </div>
    `;
  }
}