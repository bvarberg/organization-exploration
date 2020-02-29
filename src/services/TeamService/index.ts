import { Team } from "./structures/Team"

export { Context } from "./context"

export interface TeamService {
  find(opts: { id: string }): Promise<Team>
}
