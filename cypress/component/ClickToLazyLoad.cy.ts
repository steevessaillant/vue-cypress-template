import { mount } from '@cypress/vue2'
import ClickToLazyLoad from '../../src/components/ClickToLazyLoad'

describe('ClickToLazyLoad', () => {
  it('loads a component lazily when clicking a button', () => {
    mount(ClickToLazyLoad)
    cy.get('button').click()
    cy.get('p').should('have.text', `This is a test component to be loaded lazily with import('...')`)
  })
})