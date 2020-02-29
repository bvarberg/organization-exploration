import decoratorCentered from "@storybook/addon-centered/react"
import React from "react"
import testdouble from "testdouble"
import { factories } from "../../factories"
import {
  Context as ContextTeamService,
  TeamService,
} from "../../services/TeamService"
import { DrawerTeam } from "."

export default {
  title: "DrawerTeam",
  decorators: [decoratorCentered],
}

export const example = () => {
  const team = factories.team.build()
  const mockTeamService = testdouble.object<TeamService>()
  testdouble
    .when(mockTeamService.find(testdouble.matchers.anything()))
    .thenResolve(team)

  return (
    <ContextTeamService.Provider value={mockTeamService}>
      <DrawerTeam teamID={"123"} />
    </ContextTeamService.Provider>
  )
}
