import { LitElement, html } from "lit";
import { customElement } from 'lit/decorators.js'

@customElement('components-page')
export class ComponentsPage extends LitElement {
    render() {
        return html`
            <div>
                <h1>Components Page</h1>
                <p>This is the components page</p>
            </div>
        `;
    }
}