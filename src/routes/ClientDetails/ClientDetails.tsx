import React from "react"
import { useParams } from "react-router"

import { AppBar } from "../../components/AppBar"
import { ClientDrawer } from "../../components/ClientDrawer"

export function ClientDetails() {
  const { clientId } = useParams()

  return (
    <div className="App">
      <AppBar />
      {clientId ? (
        <ClientDrawer clientId={clientId} />
      ) : (
        <div>Error: No client</div>
      )}
    </div>
  )
}
