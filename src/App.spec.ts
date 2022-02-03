import { mount } from '@cypress/vue'
import App from './App.vue'

describe('App', () => {
  
  beforeEach(() => {
    mount(App)
  })
  it('renders a message', () => {
    
    cy.get('h1').should('have.text', 'Welcome to Your Vue.js + TypeScript App')
  })

  //integration des composant
  it('contains and renders the Hello World Component', () => {
    
    cy.get('.hello').should("be.visible");
  })


})