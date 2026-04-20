import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('my-remote-button')
export class MyRemoteButton extends LitElement {
    render() {
        return html`<button @click=${() => alert('Hello world 2026!')}>
                        I am remote button
                    </button>`;
    }
}