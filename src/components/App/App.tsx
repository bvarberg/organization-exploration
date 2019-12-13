import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { APIContext } from "../../contexts/APIContext"
import { createApi } from "../../api"
import { theme } from "../../theme"

const Home = lazy(() => import("../../routes/Home"))
const Companies = lazy(() => import("../../routes/Companies"))

const api = createApi()

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
              <Route path="/companies">
                <Companies />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    </APIContext.Provider>
  )
}
