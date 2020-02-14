import React from "react"
import { useTeam } from "../../services/TeamService"
import { Drawer } from "../Drawer"
import { Header } from "./Header"

type Props = Readonly<{ teamID: string; children?: React.ReactNode }>

export function DrawerTeam({ teamID, children }: Props) {
  const { team, error } = useTeam({ id: teamID })
  if (error) {
    // error
    return null
  }
  if (!team) {
    // pending
    return null
  }

  return (
    <Drawer>
      <Header title={team.name} subtitle={team.name} />
      {children}
    </Drawer>
  )
}
