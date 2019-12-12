import { ClientDrawer } from "."
import React from "react"
import { render } from "@testing-library/react"

describe("ClientDrawer", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "ClientDrawer"

    // Act
    const { getByText } = render(<ClientDrawer name={name} />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})
