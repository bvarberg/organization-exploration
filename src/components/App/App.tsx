import React, { Suspense, lazy } from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { createApi } from "../../api"
import { APIContext } from "../../contexts/APIContext"
import { ServiceA } from "../../contexts/ServiceA"
import { ServiceB } from "../../contexts/ServiceB"
import { theme } from "../../theme"
import { AppBar } from "../AppBar"

const Home = lazy(() => import("../Home"))
const Companies = lazy(() => import("../Companies"))

const api = createApi()

interface Props {
  serviceA: object // TODO: interface for the service
  serviceB: object
}

export function App({ serviceA, serviceB }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <ServiceA.Provider value={serviceA}></ServiceA.Provider>
      <ServiceB.Provider value={serviceB}></ServiceB.Provider>
      <APIContext.Provider value={api}>
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
      </APIContext.Provider>
    </ThemeProvider>
  )
}
