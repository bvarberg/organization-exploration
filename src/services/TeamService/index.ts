import { Team } from "./structures/Team"

export interface TeamService {
  find(opts: { id: string }): Promise<Team>
}
