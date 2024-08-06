describe('Hackernews Stories App', () => {
  beforeEach(() => {
    cy.mocksRestoreRouteVariants()
    cy.mocksSetDelay(0)

    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('/')
    cy.wait('@getStories')

    cy.get('input[type="text"]')
      .as('searchField')
      .should('be.visible')
      .clear()
  })

  it('searching by a term returns 5 results', () => {
    cy.get('@searchField')
      .type('Software Development Books{enter}')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 5)
  })

  it('searching by an odd term returns no reuslts', () => {
    cy.mocksUseRouteVariant('get-stories:no-stories')

    cy.get('@searchField')
      .type('Odd term{enter}')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('not.exist')
  })

  it('shows a loading fallback while fetching stories', () => {
    cy.mocksSetDelay(1000)

    cy.get('@searchField')
      .type('Software Development Books{enter}')

    cy.contains('Loading ...')
      .as('loading')
      .should('be.visible')

    cy.wait('@getStories')

      cy.get('.table-row')
        .should('be.visible')
      cy.get('@loading')
        .should('not.exist')
  })

  it('shows one less story when dismissing the first one', () => {
    cy.contains('button', 'Dismiss')
      .click()

    cy.get('.table-row')
      .should('have.length', 4)
  })

  it('show five more results when clicking More', () => {
    cy.intercept(
      'GET',
      '**/search?query=redux&page=1**'
    ).as('getNextStories')

    cy.contains('button', 'More')
      .click()

    cy.wait('@getNextStories')

    cy.get('.table-row')
      .should('have.length', 10)
  })
})
