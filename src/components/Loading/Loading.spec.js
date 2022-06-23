import '../../index.css'
import * as React from 'react'
import Loading from './'

describe('Loading component', () => {
  it('renders', { tags: '@visual' }, function() {
    cy.mount(<Loading />)

    cy.get('div')
      .contains('Loading ...')
      .should('be.visible')

    cy.percySnapshot(`${this.test.parent.title} - ${this.test.title}`)
  })
})
