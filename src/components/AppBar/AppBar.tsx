import React from "react"
import styled from "styled-components"

import logo from "../../assets/logo.svg"

interface AppBarProps {
  navigation?: React.ReactElement
  actions?: React.ReactElement
  onClickLogo?: () => void
}

// height: ${props => (props.height ? props.height : "50px")};
const AppBarContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props =>
    props.theme.primaryColor ? props.theme.primaryColor : "steelblue"};
`

const AppBarLogo = styled.img`
  height: 100%;
  padding: ${props => props.theme.spacing(4)};
  width: 50px;
`

const AppBarNavigation = styled.div`
  display: flex;
`

const AppBarActions = styled.div`
  display: flex;
  flex-direction: row;
`

export function AppBar({ navigation, actions }: AppBarProps) {
  return (
    <AppBarContainer>
      <AppBarLogo src={logo} alt="Application Name" />
      <AppBarNavigation>{navigation}</AppBarNavigation>
      <AppBarActions>{actions}</AppBarActions>
    </AppBarContainer>
  )
}
