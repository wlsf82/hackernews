import '../../index.css'
import * as React from 'react'
import { mount } from '@cypress/react'
import App from './'

describe('App', () => {
  context('Happy path', () => {
    const stories = require('../../../cypress/fixtures/stories')
    const responseBody = {
      hits: [
        stories.list[0],
        stories.list[1]
      ]
    }

    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**',
        { body: responseBody }
      )

      mount(<App />)

      cy.get('input[type="text"]')
        .should('be.visible')
        .blur()

      cy.get('.table-row')
        .should('have.length', stories.list.length)
    })

    it('dismisses one item', { tags: '@visual' }, function() {
      cy.percySnapshot(`${this.test.title} - initial state`)
      cy.get('button')
        .contains('Dismiss')
        .click()

      cy.get('.table-row')
        .should('have.length', stories.list.length - 1)

      cy.percySnapshot(`${this.test.title} - one story less`)
    })

    it('loads more items', { tags: '@visual' }, function() {
      cy.get('button')
        .contains('More')
        .click()

      cy.get('.table-row')
        .should('have.length', stories.list.length * 2)

      cy.percySnapshot(this.test.title)
    })
  })

  context('Failure path', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**',
        { forceNetworkError: true }
      )
    })

    it('fallsback on a network failure', { tags: '@visual' }, function() {
      mount(<App />)

      cy.get('input[type="text"]')
        .should('be.visible')
        .blur()

      cy.get('p')
        .contains('Something went wrong.')
        .should('be.visible')

      cy.percySnapshot(this.test.title)
    })
  })
})
