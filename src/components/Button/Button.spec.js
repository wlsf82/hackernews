import '../../index.css'
import * as React from 'react'
import Button from './'

describe('Button component', () => {
  let defaultProps

  beforeEach(() => {
    defaultProps = {
      onClick: cy.stub().as('onClickHandler')
    }
  })

  it('renders as an inline button', () => {
    cy.mount(
      <Button className="button-inline" {...defaultProps}>
        Dismiss
      </Button>
    )

    cy.get('button')
      .should('have.class', 'button-inline')
      .and('have.text', 'Dismiss')
      .and('be.visible')
  })

  it('triggers onClick event', () => {
    cy.mount(
      <Button {...defaultProps}>
        Click here
      </Button>
    )

    cy.get('button')
      .contains('Click here')
      .click()

    cy.get('@onClickHandler')
      .should('have.been.calledOnce')
  })
})
