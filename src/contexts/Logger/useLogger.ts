import { useContext } from "react"
import { Context } from "."

export function useLogger() {
  const logger = useContext(Context)

  return { logger }
}
