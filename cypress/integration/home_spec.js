describe("home", () => {
  it("displays a welcome message", () => {
    cy.visit("/")

    cy.findByText("welcome to organization-exploration").should("exist")
  })
})
