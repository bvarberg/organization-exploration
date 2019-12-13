import { RuleBreaker } from "."
import React from "react"
import { render } from "@testing-library/react"

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
