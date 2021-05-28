import '../../index.css'
import * as React from 'react'
import { mount } from '@cypress/react'
import Table from './'

describe('Table component', () => {
  it('renders empty', () => {
    const props = {
      list: []
    }

    mount(<Table {...props} />)

    cy.get('.table-row')
      .should('not.exist')
  })

  it('renders with some items', () => {
    const props = require('../../../cypress/fixtures/stories')

    mount(<Table {...props} />)

    cy.get('.table-row')
      .should('have.length', props.list.length)
  })

  it('orders by points', () => {
    const props = require('../../../cypress/fixtures/stories')

    mount(<Table {...props} />)

    cy.get('.table-row')
      .first()
      .should('contain', props.list[0].points)
    cy.get('.table-row')
      .last()
      .should('contain', props.list[1].points)

    cy.get('span button')
      .contains('Points')
      .as('pointsHeader')
      .should('not.have.class', 'button-active')
      .click()
      .should('have.class', 'button-active')

    cy.get('.table-row')
      .first()
      .should('contain', props.list[1].points)
    cy.get('.table-row')
      .last()
      .should('contain', props.list[0].points)

    cy.get('@pointsHeader')
      .click()

    cy.get('.table-row')
      .first()
      .should('contain', props.list[0].points)
    cy.get('.table-row')
      .last()
      .should('contain', props.list[1].points)
  })
})
