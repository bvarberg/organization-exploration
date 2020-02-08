import { useContext } from "react"
import { ServiceB } from "../../contexts/ServiceB"

export function useServiceB() {
  const serviceB = useContext(ServiceB)

  return { serviceB }
}
