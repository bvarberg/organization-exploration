describe("team details", () => {
  it("identifies the team in the drawer", () => {
    cy.visit("/teams/1")

    cy.findByTestId("drawer").within(_ => {
      cy.findByText("Crema").should("exist")
    })
  })
})
