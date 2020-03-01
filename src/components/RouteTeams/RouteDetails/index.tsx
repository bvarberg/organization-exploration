import React from "react"
import { useParams } from "react-router-dom"
import { DrawerTeam } from "../../DrawerTeam"
import { MessageLogger } from "../../MessageLogger"
import { PageContent } from "../../PageContent"
import { PageWrapper } from "../../PageWrapper"

export default function RouteDetails() {
  const { teamID } = useParams()
  if (!teamID) {
    // TODO: 404 view
    return null
  }

  return (
    <PageWrapper>
      <DrawerTeam teamID={teamID} />
      <PageContent>
        <p>More information about the team!</p>
        <MessageLogger />
      </PageContent>
    </PageWrapper>
  )
}
