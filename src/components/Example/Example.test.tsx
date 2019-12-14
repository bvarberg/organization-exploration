import { render } from "@testing-library/react"
import React from "react"
import { Example } from "."

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
