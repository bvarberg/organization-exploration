import { createContext } from "react"

interface ServiceB {
  findAll(): Promise<[]>
}

export const ServiceB = createContext<ServiceB>(null /* mock implementation */)
ServiceB.displayName = "ContextServiceB"
