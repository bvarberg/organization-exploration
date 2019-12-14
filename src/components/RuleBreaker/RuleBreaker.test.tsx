import { render } from "@testing-library/react"
import React from "react"
import { RuleBreaker } from "."

describe("RuleBreaker", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "RuleBreaker"

    // Act
    const { getByText } = render(<RuleBreaker name={name} />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})
