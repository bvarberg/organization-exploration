describe("company details", () => {
  it("identifies the company in the drawer", () => {
    cy.visit("/companies/124")

    cy.findByTestId("drawer").within(_ => {
      cy.findByText("Crema").should("exist")
    })
  })
})
