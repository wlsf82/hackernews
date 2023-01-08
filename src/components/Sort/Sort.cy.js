import '../../index.css'
import Sort from './'

describe('Sort component', () => {
  it('renders not active', () => {
    const props = {
      sortKey: 'foo',
      activeSortKey: 'bar'
    }

    cy.mount(<Sort {...props}>I'm not active</Sort>)

    cy.get('button')
      .contains('I\'m not active')
      .should('not.have.class','button-active')
      .and('be.visible')
  })

  it('renders active', () => {
    const props = {
      sortKey: 'baz',
      activeSortKey: 'baz'
    }

    cy.mount(<Sort {...props}>Yay! I'm active</Sort>)

    cy.get('button')
      .contains('Yay! I\'m active')
      .should('have.class','button-active')
      .and('be.visible')
  })
})
