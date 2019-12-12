import React from "react"
import { Button as MUIButton } from "@material-ui/core"

interface Props {
  text: string
  onClick?: () => void
}

export default function Button({ text, onClick = () => null }: Props) {
  return <MUIButton onClick={onClick}>{text}</MUIButton>
}
