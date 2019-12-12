import { Drawer } from "."
import React from "react"
import { render } from "@testing-library/react"

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
