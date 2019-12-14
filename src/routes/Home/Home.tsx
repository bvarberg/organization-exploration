import React from "react"
import { Link } from "react-router-dom"

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>welcome to organization-exploration</p>
      <p>
        <Link to="/companies">Companies</Link>
      </p>
    </div>
  )
}
