import { Factory } from "fishery"
import { Team } from "../../services/TeamService/structures"
import { Factories } from "../types"

export const teamFactory = Factory.define<Team, Factories>(({ params }) => {
  const { name = "Cupcup" } = params

  return new Team({
    name,
  })
})
