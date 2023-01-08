const registerCypressGrep = require('@cypress/grep')
registerCypressGrep()

import '@percy/cypress'
import { mount } from 'cypress/react'

Cypress.Commands.add('mount', mount)
