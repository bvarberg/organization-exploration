import { CompanyDrawer } from "."
import React from "react"
import { render } from "@testing-library/react"

describe("CompanyDrawer", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "CompanyDrawer"

    // Act
    const { getByText } = render(<CompanyDrawer companyId="124" />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})
