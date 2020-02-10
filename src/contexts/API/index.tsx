import { createContext } from "react"
import { APIClient, createApi } from "../../api"

const api = createApi()

export const Context = createContext<APIClient>(api)
Context.displayName = "ContextAPI"
