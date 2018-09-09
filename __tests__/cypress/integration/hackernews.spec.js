describe("Hackernews fake app", () => {
  beforeEach(() => cy.visit("/"));

  it("renders 100 items in the table", () => {
    cy.get(".table .table-row").should("have.length", 100);
  });

  it("renders 99 items in the table after dismissing the first one", () => {
    cy.get(".table-row .button-inline:first").click();
    cy.get(".table .table-row").should("have.length", 99);
  });

  it("renders 200 items in the table after clicking 'More'", () => {
    cy.contains("More").click();
    cy.get(".table .table-row").should("have.length", 200);
  });

  it("renders 100 items after searching for 'react'", () => {
    cy.get(".interactions input[type='text']")
      .clear()
      .wait(2000) // Why?
      .type("react{enter}");
  });

  it("renders 0 items after searching for 'akstuzumbazumbaie'", () => {
    cy.get(".interactions input[type='text']")
      .clear()
      .wait(2000) // Why?
      .type("akstuzumbazumbaie{enter}");
  });

  it("first became last and last become first when sorting", () => {
    cy.contains("Title").click();
    cy.get(".table .table-row a:first").then($firstTitleBeforeSorting => {
      cy.get(".table .table-row a:last").then($lastTitleBeforeSorting => {
        const firstTitleBeforeSorting = $firstTitleBeforeSorting.text();
        const lastTitleBeforeSorting = $lastTitleBeforeSorting.text();

        cy.contains("Title").click();

        cy.get(".table .table-row a:first").then($firstTitleAfterSorting => {
          cy.get(".table .table-row a:last").then($lastTitleAfterSorting => {
            const firstTitleAfterSorting = $firstTitleAfterSorting.text();
            const lastTitleAfterSorting = $lastTitleAfterSorting.text();

            expect(firstTitleBeforeSorting).to.equal(lastTitleAfterSorting);
            expect(lastTitleBeforeSorting).to.equal(firstTitleAfterSorting);
          });
        });
      });
    });
  });
});
