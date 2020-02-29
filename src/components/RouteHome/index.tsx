import React from "react"
import { Link } from "react-router-dom"

export default function RouteHome() {
  return (
    <div>
      <h1>Home</h1>
      <p>welcome to organization-exploration</p>
      <ul>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
      </ul>
    </div>
  )
}
