import { useContext, useEffect, useState } from "react"
import { Context } from "../../context"
import { Team } from "../../structures/Team"

interface Params {
  id: string
}

export function useTeam({ id }: Params) {
  const teamService = useContext(Context)

  const [data, setData] = useState<undefined | Team>(undefined)
  const [error, setError] = useState<undefined | Error>(undefined)

  useEffect(() => {
    const findTeam = async () => {
      try {
        const team = await teamService.find({ id })
        setData(team)
      } catch (err) {
        setError(err)
      }
    }

    findTeam()
  }, [id, teamService])

  return { team: data, error }
}
