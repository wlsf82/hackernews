import '../../index.css'
import * as React from 'react'
import { mount } from '@cypress/react'
import Search from './'

describe('Search component', () => {
  it('renders with a Search button', () => {
    mount(<Search>Search</Search>)

    cy.get('input[type="text"]')
        .should('be.visible')
        .blur()

    cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', '')
    cy.get('button')
      .contains('Search')
      .should('be.visible')
  })

  it('renders with value and Search button', () => {
    const props = {
      value: 'cypress.io'
    }

    mount(<Search {...props}>Search</Search>)

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
