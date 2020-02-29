import { useContext } from "react"
import { Context } from "../../context"

export function useTeamService() {
  const teamService = useContext(Context)

  return { teamService }
}
