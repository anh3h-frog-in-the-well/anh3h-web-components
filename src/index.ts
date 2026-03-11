import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@lit-labs/router';
import './header';
import './about-page';
import './components-page';

@customElement('main-page')
export class MainPage extends LitElement {
    
    static styles = css`
        .container {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            height: 100vh;
        } 
        .content {
            flex: 1;
            padding: 1rem;
            border-radius: 0.5rem;
            background-color: var(--blue-100);
        }
        .footer {
            padding: 1rem;  
            background-color: var(--gray-100);
            text-align: center;
            border-radius: 0.5rem;
        }
    `;

    private router = new Router(this, [
        {
            path: '/',
            render: () => html`<div>This is the home page</div>`,
        },
        {
            path: '/about',
            render: () => html`<about-page></about-page>`,
            },
        {
            path: '/components',
            render: () => html`<components-page></components-page>`,
        },
    ]);
    
    render() {
        return html`<div class="container">
                        <my-header></my-header>
                        <div class="content">
                            ${this.router.outlet()}
                        </div>
                        <div class="footer">
                            <p>&copy; 2026 Anh3h's Web Components. All rights reserved.</p>
                        </div>
                    </div>`;
    }
}