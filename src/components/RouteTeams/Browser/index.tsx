import React from "react"
import { Link } from "react-router-dom"

export default function Browser() {
  return (
    <div>
      <h1>Team Browser</h1>
      <ul>
        <Link to="/teams/1">
          <li data-testid="team-list-item">Crema</li>
        </Link>
      </ul>
    </div>
  )
}
