import React from "react"
import { useParams } from "react-router-dom"

import { AppBar } from "../../components/AppBar"
import { CompanyDrawer } from "../../components/CompanyDrawer"

export function CompanyDetails() {
  const { companyId } = useParams()

  return (
    <div>
      <AppBar />
      {companyId ? (
        <CompanyDrawer companyId={companyId} />
      ) : (
        <div>Error: No company</div>
      )}
    </div>
  )
}
