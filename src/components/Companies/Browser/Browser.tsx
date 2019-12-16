import React from "react"
import { Link } from "react-router-dom"

export function Browser() {
  return (
    <div>
      <h1>Company Browser</h1>
      <ul>
        <Link to="/companies/124">
          <li data-testid="company-list-item">Crema</li>
        </Link>
      </ul>
    </div>
  )
}
