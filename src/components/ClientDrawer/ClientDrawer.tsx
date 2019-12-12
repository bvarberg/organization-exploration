import React from "react"
import { useClient } from "../../hooks/useClient"
import { Drawer } from "../Drawer"
import { DrawerHeader } from "./DrawerHeader"

type Props = Readonly<{
  clientId: string
  children?: React.ReactChild
}>

export function ClientDrawer(props: Props) {
  const { clientId, children } = props
  const client = useClient({ id: clientId })

  return (
    <Drawer>
      <React.Fragment>
        <DrawerHeader title={client.displayName} subtitle={client.shortName} />
        {children}
      </React.Fragment>
    </Drawer>
  )
}
