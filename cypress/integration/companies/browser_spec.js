describe("companies browser", () => {
  it("displays a list of companies", () => {
    cy.visit("/companies")

    cy.findByText("Crema").should("exist")
  })

  describe("when a company item is selected", () => {
    it("navigates the user to the company's details", () => {
      cy.visit("/companies")

      cy.findAllByTestId("company-list-item")
        .first()
        .click()

      cy.url().should("include", "/companies/124")
    })
  })
})
