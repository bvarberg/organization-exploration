import { createContext } from "react"
import { APIClient } from "../../api"

const fakeApi: APIClient = {
  findAll: async () => {
    return undefined
  },
  findOne: async () => {
    return undefined
  },
}

export const APIContext = createContext<APIClient>(fakeApi)
APIContext.displayName = "APIContext"
