import React from "react"
import { useClient } from "../../hooks/useClient"
import { Drawer } from "../Drawer"
import { Header } from "./Header"

type Props = Readonly<{
  clientId: string
  children?: React.ReactNode
}>

export function ClientDrawer(props: Props) {
  const { clientId, children } = props
  const client = useClient({ id: clientId })

  return (
    <Drawer>
      <Header title={client.displayName} subtitle={client.shortName} />
      {children}
    </Drawer>
  )
}
