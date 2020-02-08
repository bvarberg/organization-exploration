import { createContext } from "react"
import { Logger, createLogger } from "../../services/Logger"

const defaultLogger = createLogger("mock")

export const Context = createContext<Logger>(defaultLogger)
Context.displayName = "ContextLogger"
