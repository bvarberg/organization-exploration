import React from "react"
import { Link } from "react-router-dom"
import { PageContent } from "../PageContent"
import { PageWrapper } from "../PageWrapper"

export default function Home() {
  return (
    <PageWrapper>
      <PageContent>
        <h1>Home</h1>
        <p>welcome to organization-exploration</p>
        <ul>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
        </ul>
      </PageContent>
    </PageWrapper>
  )
}
