import { useContext } from "react"
import { Context } from "../../contexts/Logger"

export function useLogger() {
  const logger = useContext(Context)

  return { logger }
}
