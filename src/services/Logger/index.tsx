import { ConsoleLogger } from "../../lib/console-logger"
import { mockLogger } from "./mock"

export interface Logger {
  log(message?: string): void
}

export function createLogger(type: "mock" | "console"): Logger {
  switch (type) {
    case "mock":
      return mockLogger
    case "console":
      return new ConsoleLogger()
    default:
      throw new Error("must specify a logger type")
  }
}
