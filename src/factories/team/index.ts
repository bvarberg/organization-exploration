import { Factory } from "fishery"
import { Team } from "../../services/TeamService/structures"
import { Factories } from "../types"

export const teamFactory = Factory.define<Team, Factories>(
  ({ sequence, params }) => {
    const { name = "Cupcup", id = `${name}-${sequence}` } = params

    return new Team({
      id,
      name,
    })
  },
)
