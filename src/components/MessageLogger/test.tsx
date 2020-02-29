import { fireEvent, render } from "@testing-library/react"
import React from "react"
import testdouble from "testdouble"
import { Context as ContextLogger, Logger } from "../../services/Logger"
import { MessageLogger } from "./"

describe("MessageLogger", () => {
  it("logs a message when clicked", () => {
    const mockLogger = testdouble.object<Logger>()

    const { getByText } = render(
      <ContextLogger.Provider value={mockLogger}>
        <MessageLogger />
      </ContextLogger.Provider>,
    )
    fireEvent.click(getByText("Log Message"))

    testdouble.verify(mockLogger.log(testdouble.matchers.anything()))
  })
})
