import React, { Suspense, lazy } from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom"

const Browser = lazy(() => import("./Browser"))
const Details = lazy(() => import("./Details"))

export function Companies() {
  const { path } = useRouteMatch()

  return (
    <Suspense fallback={<div>Loading Companies...</div>}>
      <Switch>
        <Route exact path={path}>
          <Browser />
        </Route>
        <Route path={`${path}/:companyId`}>
          <Details />
        </Route>
      </Switch>
    </Suspense>
  )
}