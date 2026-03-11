import { describe, it, expect, beforeEach } from 'vitest'
import { fixture, html } from '@open-wc/testing-helpers'
import './my-element'
import { MyElement } from './my-element'

describe('MyElement', () => {
  let element: MyElement

  beforeEach(async () => {
    element = await fixture<MyElement>(html`<my-element></my-element>`)
  })

  it('should render', () => {
    expect(element).toBeDefined()
  })

  it('should have initial count of 0', () => {
    expect(element.shadowRoot?.textContent).toContain('count is 0')
  })

  it('should increment count when button is clicked', async () => {
    const button = element.shadowRoot?.querySelector('button')
    expect(button).toBeDefined()

    button?.click()
    await element.updateComplete

    expect(element.shadowRoot?.textContent).toContain('count is 1')
  })

  it('should increment count multiple times', async () => {
    const button = element.shadowRoot?.querySelector('button')

    for (let i = 0; i < 5; i++) {
      button?.click()
      await element.updateComplete
    }

    expect(element.shadowRoot?.textContent).toContain('count is 5')
  })
})
