import React from "react"
import styled, { keyframes } from "styled-components"
import { useHistory } from "react-router-dom"

import logo from "../../assets/logo.svg"

interface AppBarProps {
  navigation?: React.ReactChild
  actions?: React.ReactChild
  onClickLogo?: () => void
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color: ${props => props.theme.primaryColor};
`

const Logo = styled.img.attrs(_ => ({
  size: "50px",
}))`
  height: ${props => props.size};
  width: ${props => props.size};
  padding: ${props => props.theme.spacing(1)};
  animation: ${spin} infinite 20s linear;
  cursor: pointer;
`

const Spreader = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing(1)};
`

const NavigationContainer = styled.div`
  display: flex;
`

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export function AppBar({
  navigation,
  actions,
  onClickLogo = () => null,
}: AppBarProps) {
  return (
    <Container>
      <Logo src={logo} alt="Application Name" onClick={onClickLogo} />
      <Spreader>
        {navigation && <NavigationContainer>{navigation}</NavigationContainer>}
        {actions && <ActionsContainer>{actions}</ActionsContainer>}
      </Spreader>
    </Container>
  )
}

export function ConnectedAppBar() {
  const history = useHistory()

  function handleClickLogo() {
    history.push("/")
  }

  return <AppBar onClickLogo={handleClickLogo} />
}
