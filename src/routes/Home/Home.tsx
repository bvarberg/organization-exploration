import React from "react"
import { Link } from "react-router-dom"
import { AppBar } from "../../components/AppBar"

export function Home() {
  return (
    <div>
      <AppBar />
      <h1>Home</h1>
      <p>welcome to organization-exploration</p>
      <p>
        <Link to="/companies">Companies</Link>
      </p>
    </div>
  )
}
