import decoratorCentered from "@storybook/addon-centered/react"
import React from "react"
import testdouble from "testdouble"
import {
  Context as ContextTeamService,
  TeamService,
} from "../../services/TeamService"
// replace below with fishery factory
import { Team } from "../../services/TeamService/structures"
import { DrawerTeam } from "."

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "DrawerTeam",
  decorators: [decoratorCentered],
}

export const example = () => {
  const mockTeamService = testdouble.object<TeamService>()
  testdouble.when(mockTeamService.find({ id: "123" })).thenResolve<Team>({
    name: "Storybook Team",
  })

  return (
    <ContextTeamService.Provider value={mockTeamService}>
      <DrawerTeam teamID={"123"} />
    </ContextTeamService.Provider>
  )
}
