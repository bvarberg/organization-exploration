import React from "react"
import { Link } from "react-router-dom"

import { AppBar } from "../../components/AppBar"

export function Home() {
  return (
    <div>
      <AppBar />
      <h1>Home</h1>
      <p>
        <Link to="/companies/124">Go to Company Details</Link>
      </p>
    </div>
  )
}
