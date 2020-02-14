import { createContext } from "react"
import testdouble from "testdouble"
import { TeamService } from "."

const mockTeamService = testdouble.object<TeamService>()

export const Context = createContext<TeamService>(mockTeamService)
Context.displayName = "ContextTeamService"
