import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { theme } from "../../theme"

const Home = lazy(() => import("../../routes/Home"))
const CompanyDetails = lazy(() => import("../../routes/CompanyDetails"))

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/companies/:companyId">
              <CompanyDetails />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}
