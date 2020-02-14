import { Team } from "./structures/Team"

export { Context } from "./context"
export * from "./structures"
export * from "./hooks"

export interface TeamService {
  find(opts: { id: string }): Promise<Team>
}
