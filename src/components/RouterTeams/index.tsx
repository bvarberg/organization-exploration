import React, { Suspense, lazy } from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom"

const Browser = lazy(() => import("./Browser"))
const RouterTeam = lazy(() => import("./RouterTeam"))

export default function RouterTeams() {
  const { path } = useRouteMatch()

  return (
    <Suspense fallback={<div>Loading Teams...</div>}>
      <Switch>
        <Route exact path={path}>
          <Browser />
        </Route>
        <Route path={`${path}/:teamID`}>
          <RouterTeam />
        </Route>
      </Switch>
    </Suspense>
  )
}
