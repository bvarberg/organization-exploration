import React from "react"
import { useCompany } from "../../hooks/useCompany"
import { Drawer } from "../Drawer"
import { Header } from "./Header"

type Props = Readonly<{
  companyId: string
  children?: React.ReactNode
}>

export function CompanyDrawer(props: Props) {
  const { companyId, children } = props
  const company = useCompany({ id: companyId })

  return (
    <Drawer>
      <Header title={company.displayName} subtitle={company.shortName} />
      {children}
    </Drawer>
  )
}
