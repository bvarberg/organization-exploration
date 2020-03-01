import React, { Suspense, lazy } from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Context as ContextLogger, Logger } from "../../services/Logger"
import {
  Context as ContextTeamService,
  TeamService,
} from "../../services/TeamService"
import { theme } from "../../theme"
import { AppBar } from "../AppBar"

const Home = lazy(() => import("../Home"))
const RouterTeams = lazy(() => import("../RouterTeams"))

interface Props {
  logger: Logger
  teamService: TeamService
}

export function App({ logger, teamService }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <ContextLogger.Provider value={logger}>
        <ContextTeamService.Provider value={teamService}>
          <Router>
            <AppBar />
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/teams">
                  <RouterTeams />
                </Route>
              </Switch>
            </Suspense>
          </Router>
        </ContextTeamService.Provider>
      </ContextLogger.Provider>
    </ThemeProvider>
  )
}
