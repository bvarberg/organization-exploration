import { Button as MUIButton } from "@material-ui/core"
import React from "react"

interface Props {
  onClick?: () => void
  children: React.ReactChild
}

export function Button({ children, onClick = () => null }: Props) {
  return <MUIButton onClick={onClick}>{children}</MUIButton>
}
