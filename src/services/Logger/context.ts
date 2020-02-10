import { createContext } from "react"
import { Logger, createLogger } from "."

const defaultLogger = createLogger("mock")

export const ContextLogger = createContext<Logger>(defaultLogger)
ContextLogger.displayName = "ContextLogger"
