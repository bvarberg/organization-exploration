import { render } from "@testing-library/react"
import React from "react"
import { CompanyDrawer } from "."

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
