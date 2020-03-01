import React from "react"
import { useTeam } from "../../services/TeamService/hooks"
import { Drawer } from "../Drawer"
import { Header } from "./Header"

type Props = Readonly<{ teamID: string; children?: React.ReactNode }>

export function DrawerTeam({ teamID, children }: Props) {
  const { team, error } = useTeam({ id: teamID })
  if (error) {
    return null
  }

  return (
    <Drawer>
      {team ? (
        <Header title={team.name} subtitle={team.id} />
      ) : (
        <Header title="Team" subtitle="loading..." />
      )}
      {children}
    </Drawer>
  )
}
