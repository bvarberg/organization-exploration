import React from "react"
import { useParams } from "react-router-dom"
import { DrawerTeam } from "../../../components/DrawerTeam"

export default function Details() {
  const { teamID } = useParams()

  return teamID ? <DrawerTeam teamID={teamID} /> : null
}
