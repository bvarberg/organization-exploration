import { useContext } from "react"
import { Context } from "../../context"

export function useLogger() {
  const logger = useContext(Context)

  return { logger }
}
