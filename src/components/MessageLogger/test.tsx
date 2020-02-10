import { fireEvent, render } from "@testing-library/react"
import React from "react"
import td from "testdouble"
import { ContextLogger } from "../../contexts/Logger"
import { Logger } from "../../services/Logger"
import { MessageLogger } from "./"

describe("MessageLogger", () => {
  it("logs a message when clicked", () => {
    const mockLogger = td.object<Logger>()
    const { getByText } = render(
      <ContextLogger.Provider value={mockLogger}>
        <MessageLogger />
      </ContextLogger.Provider>,
    )

    fireEvent.click(getByText("Log Message"))

    td.verify(mockLogger.log(td.matchers.anything()))
  })
})
