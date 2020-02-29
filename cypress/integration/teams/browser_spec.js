describe("teams browser", () => {
  it("displays a list of teams", () => {
    cy.visit("/teams")

    cy.findByText("Crema").should("exist")
  })

  describe("when a team item is selected", () => {
    it("navigates the user to the team's details", () => {
      cy.visit("/teams")

      cy.findAllByTestId("team-list-item")
        .first()
        .click()

      cy.url().should("include", "/teams/1")
    })
  })
})
