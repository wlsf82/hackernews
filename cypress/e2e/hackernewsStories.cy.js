describe('Hackernews Stories App', () => {
  beforeEach(() => {
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

  it('searches by a term and it returns another 100 results', () => {
    cy.get('@searchField')
      .type('react{enter}')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
  })
})
