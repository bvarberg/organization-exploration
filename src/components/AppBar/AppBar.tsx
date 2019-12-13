import React from "react"
import styled from "styled-components"

import logo from "../../assets/logo.svg"

interface AppBarProps {
  navigation?: React.ReactChild
  actions?: React.ReactChild
  onClickLogo?: () => void
}

const Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color: ${props =>
    props.theme.primaryColor ? props.theme.primaryColor : "steelblue"};
`

const Logo = styled.img`
  height: 100%;
  padding: ${props => props.theme.spacing(4)};
  width: 50px;
  animation: AppBarLogo-spin infinite 20s linear;

  @keyframes AppBarLogo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Spreader = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing(8)};
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
