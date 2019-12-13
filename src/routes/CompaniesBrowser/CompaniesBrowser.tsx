import React from "react"
import { Link } from "react-router-dom"

import { AppBar } from "../../components/AppBar"

export function CompaniesBrowser() {
  return (
    <div>
      <AppBar />
      <ul>
        <Link to="/companies/124">
          <li>Crema</li>
        </Link>
      </ul>
    </div>
  )
}
