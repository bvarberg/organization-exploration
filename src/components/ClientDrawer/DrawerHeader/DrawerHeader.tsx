import React from "react"

type Props = Readonly<{
  title: string
  subtitle: string
}>

export function DrawerHeader(props: Props) {
  const { title, subtitle } = props

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  )
}
