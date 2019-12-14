import { createContext } from "react"
import { APIClient, createApi } from "../../api"

const api = createApi()

export const APIContext = createContext<APIClient>(api)
APIContext.displayName = "APIContext"
