import '../../index.css'
import * as React from 'react'
import Search from './'

describe('Search component', () => {
  let defaultProps

  beforeEach(() => {
    defaultProps = {
      onChange: cy.stub(),
      onSubmit: cy.stub()
    }
  })

  it('renders with a Search button', { tags: '@visual' }, function() {
    cy.mount(<Search {...defaultProps}>Search</Search>)

    cy.get('input[type="text"]')
      .should('be.visible')
      .blur()

    cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', '')
    cy.get('button')
      .contains('Search')
      .should('be.visible')

    cy.percySnapshot(`${this.test.parent.title} - ${this.test.title}`)
  })

  it('renders with value and Search button', () => {
    const props = {
      ...defaultProps,
      value: 'cypress.io'
    }

    cy.mount(<Search {...props}>Search</Search>)

    cy.get('input[type="text"]')
      .should('be.visible')
      .blur()

    cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', props.value)
    cy.get('button')
      .contains('Search')
      .should('be.visible')
  })
})
