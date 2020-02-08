import { createContext } from "react"

interface ServiceA {
  findOne(): Promise<null>
}

// TODO: Is this where Mirage could step in?
export const ServiceA = createContext<ServiceA>(null /* mock implementation */)
ServiceA.displayName = "ContextServiceA"
