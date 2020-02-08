import { ConsoleLogger } from "./ConsoleLogger"
import { mockLogger } from "./MockLogger"

export interface Logger {
  log(message?: string): void
}

export function createLogger(type: string): Logger {
  switch (type) {
    case "mock":
      return mockLogger
    case "console":
      return new ConsoleLogger()
    default:
      throw new Error("must specify a logger type")
  }
}
