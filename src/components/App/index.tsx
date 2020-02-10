import React, { Suspense, lazy } from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { APIClient } from "../../api"
import { Context as ContextAPI } from "../../contexts/API"
import { Context as ContextLogger } from "../../contexts/Logger"
import { Logger } from "../../services/Logger"
import { theme } from "../../theme"
import { AppBar } from "../AppBar"

const Home = lazy(() => import("../Home"))
const Companies = lazy(() => import("../Companies"))

interface Props {
  logger: Logger
  api: APIClient
}

export function App({ api, logger }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <ContextLogger.Provider value={logger} />
      <ContextAPI.Provider value={api}>
        <Router>
          <AppBar />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/companies">
                <Companies />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </ContextAPI.Provider>
    </ThemeProvider>
  )
}
