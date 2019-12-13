import { createContext } from "react"
import { APIClient } from "../../api"

const fakeApi: APIClient = {
  setToken: ({ token }: { token: string }) => {
    console.log(`set token to ${token}`)
    return undefined
  },
  findAll: async () => {
    return undefined
  },
  findOne: async () => {
    return undefined
  },
}

export const APIContext = createContext<APIClient>(fakeApi)
APIContext.displayName = "APIContext"
