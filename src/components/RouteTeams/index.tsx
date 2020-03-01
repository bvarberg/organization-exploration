import React, { Suspense, lazy } from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom"

const RouteBrowser = lazy(() => import("./RouteBrowser"))
const RouteDetails = lazy(() => import("./RouteDetails"))

export default function RouteTeams() {
  const { path } = useRouteMatch()

  return (
    <Suspense fallback={<div>Loading Teams...</div>}>
      <Switch>
        <Route exact path={path}>
          <RouteBrowser />
        </Route>
        <Route path={`${path}/:teamID`}>
          <RouteDetails />
        </Route>
      </Switch>
    </Suspense>
  )
}
