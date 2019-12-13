import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { theme } from "../../theme"

const Home = lazy(() => import("../../routes/Home"))
const ClientDetails = lazy(() => import("../../routes/ClientDetails"))

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/client/:clientId">
              <ClientDetails />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}
