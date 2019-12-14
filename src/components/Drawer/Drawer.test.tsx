import { render } from "@testing-library/react"
import React from "react"
import { Drawer } from "."

describe("Drawer", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "Drawer"

    // Act
    const { getByText } = render(<Drawer name={name} />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})
