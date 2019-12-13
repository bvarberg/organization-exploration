import { createContext } from "react"

interface API {
  request: () => void
}

const fakeApi: API = {
  request: () => null,
}

export const APIContext = createContext<API>(fakeApi)
APIContext.displayName = "APIContext"
