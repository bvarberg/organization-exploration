import { createContext } from "react"

const mockCurrentUser = {
  currentUser: {
    name: "MockUser",
    token: "mock-token",
  },
}

export const CurrentUser = createContext(mockCurrentUser)
CurrentUser.displayName = "ContextCurrentUser"
