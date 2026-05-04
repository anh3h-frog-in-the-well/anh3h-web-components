import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('my-button')
export class MyButton extends LitElement {
  @property({ type: String })
  variant: 'primary' | 'secondary' | 'danger' = 'primary'

  @property({ type: Boolean })
  disabled = false

  @property({ type: String })
  size: 'small' | 'medium' | 'large' = 'medium'

  render() {
    return html`
      <button class="btn btn-${this.variant} btn-${this.size}" ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      border: none;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: inherit;
    }

    button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    /* Sizes */
    .btn-small {
      padding: 0.4rem 0.8rem;
      font-size: 0.875rem;
    }

    .btn-medium {
      padding: 0.6rem 1.2rem;
      font-size: 1rem;
    }

    .btn-large {
      padding: 0.8rem 1.6rem;
      font-size: 1.125rem;
    }

    /* Variants */
    .btn-primary {
      background-color: #3b82f6;
      color: white;
    }

    .btn-primary:hover:not(:disabled) {
      background-color: #2563eb;
    }

    .btn-secondary {
      background-color: #6b7280;
      color: white;
    }

    .btn-secondary:hover:not(:disabled) {
      background-color: #4b5563;
    }

    .btn-danger {
      background-color: #ef4444;
      color: white;
    }

    .btn-danger:hover:not(:disabled) {
      background-color: #dc2626;
    }
  `
}
