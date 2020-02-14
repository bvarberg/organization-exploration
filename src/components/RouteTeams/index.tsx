import React, { Suspense, lazy } from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom"

const Browser = lazy(() => import("./Browser"))
const Details = lazy(() => import("./Details"))

export default function RouteTeams() {
  const { path } = useRouteMatch()

  return (
    <Suspense fallback={<div>Loading Teams...</div>}>
      <Switch>
        <Route exact path={path}>
          <Browser />
        </Route>
        <Route path={`${path}/:teamID`}>
          <Details />
        </Route>
      </Switch>
    </Suspense>
  )
}
