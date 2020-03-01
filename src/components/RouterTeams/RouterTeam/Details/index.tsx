import React from "react"
import { useParams } from "react-router-dom"
import { useLogger } from "../../../../services/Logger/hooks"
import { MessageLogger } from "../../../MessageLogger"
import { PageContent } from "../../../PageContent"

export default function Details() {
  const { teamID } = useParams()
  const { logger } = useLogger()

  logger.log(teamID)

  return (
    <PageContent>
      <p>More information about the team!</p>
      <MessageLogger />
    </PageContent>
  )
}
