import React from "react"
import { Link } from "react-router-dom"
import { PageContent } from "../../PageContent"
import { PageWrapper } from "../../PageWrapper"

export default function Browser() {
  return (
    <PageWrapper>
      <PageContent>
        <h1>Team Browser</h1>
        <ul>
          <Link to="/teams/1">
            <li data-testid="team-list-item">Crema</li>
          </Link>
        </ul>
      </PageContent>
    </PageWrapper>
  )
}
