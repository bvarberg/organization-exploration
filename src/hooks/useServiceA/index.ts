import { useContext } from "react"
import { ServiceA } from "../../contexts/ServiceA"

export function useServiceA() {
  const serviceA = useContext(ServiceA)

  return { serviceA }
}
