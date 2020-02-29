import { Team } from "./structures"

export interface TeamService {
  find(opts: { id: string }): Promise<Team>
}
