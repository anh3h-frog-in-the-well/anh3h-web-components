import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import 'anh3h-ui';

@customElement('my-remote-button')
export class MyRemoteButton extends LitElement {
    render() {
        return html`
            <div>
                <h2>Remote Component with Shared UI</h2>
                <p>This component uses shared UI components from anh3h-ui:</p>
                <my-button variant="primary" size="medium" @click=${this.handleClick}>
                    Primary Button
                </my-button>
                <my-button variant="secondary" size="medium" style="margin-left: 0.5rem;" @click=${this.handleClick}>
                    Secondary Button
                </my-button>
                <my-button variant="danger" size="medium" style="margin-left: 0.5rem;" @click=${this.handleClick}>
                    Danger Button
                </my-button>
            </div>
        `;
    }

    private handleClick(): void {
        alert('hello world!')
    }
}