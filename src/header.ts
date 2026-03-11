import { html, LitElement, css } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement('my-header')
export class MyHeader extends LitElement {
    @state()
    private currentPath = window.location.pathname;

    static styles = css`
        .header {
            height: 5rem;
            display: flex;
            justify-content: center;
            font-size: 1rem;
            font-weight: bold;
            background-color: var(--gray-500);
            border-radius: 0.5rem;
        }

        .header-items {
            color: white;
            padding: 1.5rem;
            margin: 0.5rem;
            border-radius: 0.5rem;
            transition: background-color 0.3s;
        }

        a {
            text-decoration: none;
            color: white;
        }

        a:hover {
            background-color: var(--blue-active);
        }

        .active {
            background-color: var(--blue-active);
        }
    `

    render() {
        return html`
            <div class="header">
                <a href="/" @click=${() => this.currentPath = '/'} class="header-items ${this.currentPath === '/' ? 'active' : ''}">Home</a>
                <a href="/components" @click=${() => this.currentPath = '/components'} class="header-items ${this.currentPath === '/components' ? 'active' : ''}">Components</a>
                <a href="/about" @click=${() => this.currentPath = '/about'} class="header-items ${this.currentPath === '/about' ? 'active' : ''}">About</a>
            </div>
        `;
    }
}