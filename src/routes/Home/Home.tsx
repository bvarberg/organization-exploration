import React from "react"
import { Link } from "react-router-dom"

import { AppBar } from "../../components/AppBar"

export function Home() {
  return (
    <div className="App">
      <AppBar />
      <h1>Home</h1>
      <p>
        <Link to="/client/123">Go to Client Details</Link>
      </p>
    </div>
  )
}
