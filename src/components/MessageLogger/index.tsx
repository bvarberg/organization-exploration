import React from "react"
import { useLogger } from "../../hooks/useLogger"

export function MessageLogger() {
  const { logger } = useLogger()

  return (
    <button onClick={() => logger.log("uses the logger service")}>
      Log Message
    </button>
  )
}
