import React from "react"
import td from "testdouble"
import { Context, Team, TeamService } from "../../services/TeamService"
import { renderWithTheme } from "../../utils/test-utils"
import { DrawerTeam } from "."

describe("DrawerTeam", () => {
  it("loads the team from the API", async () => {
    const teamID = "1"
    const mockTeamService = td.object<TeamService>()
    // TODO: Actually resolve with an instance of (or mock of) the Team class
    // Data structures also called "value objects" (Refactoring book?)
    td.when(mockTeamService.find({ id: teamID })).thenResolve(
      new Team({
        name: "Crema",
        id: "1",
      }),
    )

    const { findByText } = renderWithTheme(
      <Context.Provider value={mockTeamService}>
        <DrawerTeam teamID={teamID} />
      </Context.Provider>,
    )
    const received = await findByText("Crema")

    expect(received).toHaveTextContent("Crema")
  })
})
