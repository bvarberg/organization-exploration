import { createContext } from "react"
import { ServiceA as Service } from "./interface"
import { mockServiceA } from "./mock"

export const ServiceA = createContext<Service>(mockServiceA)
ServiceA.displayName = "ContextServiceA"
