import '../../index.css'
import App from './'

describe('App', () => {
  context('Happy path', () => {
    const stories = require('../../../cypress/fixtures/stories')
    const incomplete = require('../../../cypress/fixtures/incomplete')
    const pageOneResBody = {
      hits: [
        stories.list[0],
        stories.list[1]
      ]
    }
    const pageTwoResBody = {
      hits: [
        incomplete.list[0],
        incomplete.list[1],
        incomplete.list[2]
      ]
    }

    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search?query=redux&page=0&hitsPerPage=100',
        { body: pageOneResBody }
      )

      cy.intercept(
        'GET',
        '**/search?query=redux&page=1&hitsPerPage=100',
        { body: pageTwoResBody }
      )

      cy.mount(<App />)

      cy.get('input[type="text"]')
        .should('be.visible')
        .blur()

      cy.get('.table-row')
        .should('have.length', stories.list.length)
    })

    it('dismisses one item', { tags: '@visual' }, function() {
      cy.get('button')
        .contains('Dismiss')
        .should('be.visible')
        .click()

      cy.get('.table-row')
        .should('have.length', stories.list.length - 1)

      cy.percySnapshot(`${this.test.parent.title} - ${this.test.title}`)
    })

    it('loads more items', { tags: '@visual' }, function() {
      cy.get('button')
        .contains('More')
        .should('be.visible')
        .click()

      cy.get('.table-row')
        .should('have.length', stories.list.length + incomplete.list.length)

      cy.percySnapshot(`${this.test.parent.title} - ${this.test.title}`)
    })
  })

  context('Failure path', () => {
    it('fallsback on a network failure', { tags: '@visual' }, function() {
      cy.intercept(
        'GET',
        '**/search**',
        { forceNetworkError: true }
      )

      cy.mount(<App />)

      cy.get('input[type="text"]')
        .should('be.visible')
        .blur()

      cy.get('p')
        .contains('Something went wrong.')
        .should('be.visible')

      cy.percySnapshot(`${this.test.parent.title} - ${this.test.title}`)
    })

    it('fallsback on a server failure', () => {
      cy.intercept(
        'GET',
        '**/search**',
        { statusCode: 500 }
      )

      cy.mount(<App />)

      cy.get('p')
        .contains('Something went wrong.')
        .should('be.visible')
    })
  })
})
