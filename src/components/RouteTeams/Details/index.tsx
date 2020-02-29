import React from "react"
import { useParams } from "react-router-dom"
import { DrawerTeam } from "../../../components/DrawerTeam"
import { PageContent } from "../../../components/PageContent"
import { PageWrapper } from "../../../components/PageWrapper"

export default function Details() {
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
      </PageContent>
    </PageWrapper>
  )
}
