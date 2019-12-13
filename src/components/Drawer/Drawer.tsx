import React from "react"
import styled from "styled-components"

type Props = Readonly<{
  children?: React.ReactNode
}>

const Container = styled.div`
  width: 240px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid steelblue;
`

export function Drawer({ children }: Props) {
  return <Container>{children}</Container>
}
