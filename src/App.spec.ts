import { mount } from '@cypress/vue2'
import App from './App.vue'

describe('App', () => {
  
  beforeEach(() => {
    mount(App)
  })
  it('renders a message', () => {
    
    cy.get('h1').should('have.text', 'Welcome to Your Vue.js + TypeScript App')
  })

  //integration des composants
  it('contains and renders the Hello World Component', () => {
    
    cy.get('.hello').should("be.visible");
  })


})