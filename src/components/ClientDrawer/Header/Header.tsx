import React from "react"
import styled from "styled-components"

type Props = Readonly<{
  title: string
  subtitle: string
}>

const Container = styled.div`
  padding: ${props => props.theme.spacing(8)};
  border-bottom: 1px solid steelblue;
`
const Title = styled.h1`
  margin: 0;
`
const Subtitle = styled.h2`
  margin: 0;
`

export function Header(props: Props) {
  const { title, subtitle } = props

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
