import { useContext } from "react"
import { CurrentUser } from "../../contexts/CurrentUser"

export function useCurrentUser() {
  // TODO: Pull from localStorage first
  const { currentUser, logIn, logOut } = useContext(CurrentUser)

  return { currentUser, logIn, logOut }
}
