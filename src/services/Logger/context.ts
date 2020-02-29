import { createContext } from "react"
import testdouble from "testdouble"
import { Logger } from "."

const mockLogger = testdouble.object<Logger>()

export const Context = createContext<Logger>(mockLogger)
Context.displayName = "ContextLogger"
