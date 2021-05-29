import '../../index.css'
import * as React from 'react'
import { mount } from '@cypress/react'
import Sort from './'

describe('Sort component', () => {
  it('renders not active', () => {
    const props = {
      sortKey: 'foo',
      activeSortKey: 'bar'
    }

    mount(<Sort {...props}>I'm not active</Sort>)

    cy.get('button')
      .should('not.have.class','button-active')
  })

  it('renders active', { tags: '@visual' }, function() {
    const props = {
      sortKey: 'baz',
      activeSortKey: 'baz'
    }

    mount(<Sort {...props}>Yay! I'm active</Sort>)

    cy.get('button')
      .should('have.class','button-active')

    cy.percySnapshot(`${this.test.parent.title} - ${this.test.title}`)
  })
})
