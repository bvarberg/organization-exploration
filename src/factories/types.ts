import { Factory } from "fishery"
import { Team } from "../services/TeamService/structures"

export interface Factories {
  team: Factory<Team>
}
