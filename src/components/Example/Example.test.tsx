import { Example } from "."
import React from "react"
import { render } from "@testing-library/react"

describe("Example", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "Example"

    // Act
    const { getByText } = render(<Example name={name} />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})
