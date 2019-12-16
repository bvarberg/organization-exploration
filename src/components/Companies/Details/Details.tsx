import React from "react"
import { useParams } from "react-router-dom"
import { CompanyDrawer } from "../../../components/CompanyDrawer"

export function Details() {
  const { companyId } = useParams()

  return (
    <div>
      {companyId && <CompanyDrawer companyId={companyId}></CompanyDrawer>}
    </div>
  )
}
