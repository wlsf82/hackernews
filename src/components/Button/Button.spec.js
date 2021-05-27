import '../../index.css'
import * as React from 'react'
import { mount } from '@cypress/react'
import Button from './'

describe('Button component', () => {
  it('renders with proper className', () => {
    mount(
      <Button className="my-awesome-button">
        Hey, click me!
      </Button>
    )

    cy.get('button').should('have.class', 'my-awesome-button')
  })

  it('renders as an inline button', () => {
    mount(
      <Button className="button-inline">
        Dismiss
      </Button>
    )

    cy.get('button').should('have.class', 'button-inline')
  })
})
