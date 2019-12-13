import React from "react"
import { useParams } from "react-router-dom"

import { AppBar } from "../../../components/AppBar"
import { CompanyDrawer } from "../../../components/CompanyDrawer"

export function Details() {
  const { companyId } = useParams()

  return (
    <div>
      <AppBar />
      {companyId && <CompanyDrawer companyId={companyId}></CompanyDrawer>}
    </div>
  )
}
