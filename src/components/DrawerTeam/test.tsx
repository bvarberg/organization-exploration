import React from "react"
import td from "testdouble"
import { factories } from "../../factories"
import {
  Context as ContextTeamService,
  TeamService,
} from "../../services/TeamService"
import { renderWithTheme } from "../../util/test-utils"
import { DrawerTeam } from "."

describe("DrawerTeam", () => {
  it("loads the team from the API", async () => {
    const teamID = "vera-1"
    const team = factories.team.build({ id: teamID, name: "Vera" })
    const mockTeamService = td.object<TeamService>()
    td.when(mockTeamService.find({ id: teamID })).thenResolve(team)

    const { findByText } = renderWithTheme(
      <ContextTeamService.Provider value={mockTeamService}>
        <DrawerTeam teamID={teamID} />
      </ContextTeamService.Provider>,
    )
    const received = await findByText("Vera")

    expect(received).toHaveTextContent("Vera")
  })
})
