import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { APIContext } from "../../contexts/api"
import { theme } from "../../theme"
import { config } from "../../config"

const Home = lazy(() => import("../../routes/Home"))
const CompaniesBrowser = lazy(() => import("../../routes/CompaniesBrowser"))
const CompanyDetails = lazy(() => import("../../routes/CompanyDetails"))

const api = {
  request: () => console.log(`request to ${config.api.baseUrl}`),
}

export function App() {
  return (
    <APIContext.Provider value={api}>
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
              <Route path="/companies">
                <CompaniesBrowser />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    </APIContext.Provider>
  )
}
