import '../../index.css'
import * as React from 'react'
import Table from './'

describe('Table component', () => {
  let defaultProps

  beforeEach(() => {
    defaultProps = {
      onClick: cy.stub(),
      onDismiss: cy.stub()
    }
  })

  it('renders empty', { tags: '@visual' }, function() {
    const props = {
      ...defaultProps,
      list: []
    }

    cy.mount(<Table {...props} />)

    cy.get('.table-row')
      .should('not.exist')

    cy.percySnapshot(`${this.test.parent.title} - ${this.test.title}`)
  })

  context('Not empty', () => {
    let props

    beforeEach(() => {
      props = {
        ...defaultProps,
        ...require('../../../cypress/fixtures/stories')
      }

      cy.mount(<Table {...props} />)
    })

    it('renders with some items', () => {
      cy.get('.table-row')
        .should('have.length', props.list.length)
    })

    it('orders by points', { tags: '@visual' }, function() {
      cy.get('.table-row')
        .first()
        .should('contain', props.list[0].points)
        .and('be.visible')
      cy.get('.table-row')
        .last()
        .should('contain', props.list[1].points)
        .and('be.visible')

      cy.get('span button')
        .contains('Points')
        .as('pointsHeader')
        .should('not.have.class', 'button-active')
        .and('be.visible')
        .click()
        .should('have.class', 'button-active')

      cy.get('.table-row')
        .first()
        .should('contain', props.list[1].points)
      cy.get('.table-row')
        .last()
        .should('contain', props.list[0].points)

      cy.percySnapshot(`${this.test.parent.parent.title} - ${this.test.parent.title} - ${this.test.title} - order desc`)

      cy.get('@pointsHeader')
        .click()

      cy.get('.table-row')
        .first()
        .should('contain', props.list[0].points)
      cy.get('.table-row')
        .last()
        .should('contain', props.list[1].points)

      cy.percySnapshot(`${this.test.parent.parent.title} - ${this.test.parent.title} - ${this.test.title} - order asc`)
    })
  })
})
