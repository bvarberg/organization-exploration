import React from "react"

type Props = Readonly<{ children?: React.ReactChild }>

export function Drawer({ children }: Props) {
  return <div className="Drawer">{children}</div>
}
