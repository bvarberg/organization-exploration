import { useQuery } from "react-query"
import { useTeamService } from "../useTeamService"

interface Params {
  id: string
}

export function useTeam({ id }: Params) {
  const { teamService } = useTeamService()

  const { status, data, error } = useQuery(
    ["teams", id],
    (_key: unknown, id: string) => {
      return teamService.find({ id })
    },
  )

  return { team: data, status, error }
}
