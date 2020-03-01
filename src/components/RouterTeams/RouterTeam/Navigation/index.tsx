import React from "react"
import { Link, useRouteMatch } from "react-router-dom"

export function Navigation() {
  const { url } = useRouteMatch()

  return (
    <ul>
      <li>
        <Link to={`${url}/details`}>Details</Link>
      </li>
    </ul>
  )
}
