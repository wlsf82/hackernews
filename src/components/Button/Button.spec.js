import '../../index.css'
import * as React from 'react'
import { mount } from '@cypress/react'
import Button from './'

describe('Button component', () => {
  let defaultProps

  beforeEach(() => {
    defaultProps = {
      onClick: cy.stub().as('onClickHandler')
    }
  })

  it('renders with proper className and content', () => {
    mount(
      <Button className="my-awesome-button" {...defaultProps}>
        Hey, click me!
      </Button>
    )

    cy.get('button')
      .should('have.class', 'my-awesome-button')
      .and('have.text', 'Hey, click me!')
  })

  it('renders as an inline button', () => {
    mount(
      <Button className="button-inline" {...defaultProps}>
        Dismiss
      </Button>
    )

    cy.get('button')
      .should('have.class', 'button-inline')
      .and('have.text', 'Dismiss')
  })

  it('triggers onClick event on click', () => {
    mount(
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
