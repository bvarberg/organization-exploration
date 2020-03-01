import React from "react"
import { useTeam } from "../../services/TeamService/hooks"
import { Drawer } from "../Drawer"
import { Header } from "./Header"

type Props = Readonly<{ teamID: string; children?: React.ReactNode }>

export function DrawerTeam({ teamID, children }: Props) {
  const { team, status } = useTeam({ id: teamID })
  if (status === "loading") {
    return (
      <Drawer>
        <Header title="Loading" subtitle="..." />
      </Drawer>
    )
  } else if (status === "error") {
    return null
  }

  return (
    <Drawer>
      <Header title={team.name} subtitle={team.id} />
      {children}
    </Drawer>
  )
}
