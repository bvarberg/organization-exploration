import React, { Suspense, lazy } from "react"
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom"
import { DrawerTeam } from "../../DrawerTeam"
import { PageWrapper } from "../../PageWrapper"
import { Navigation } from "./Navigation"

const Details = lazy(() => import("./Details"))

export default function RouterTeam() {
  const { path } = useRouteMatch()
  const { teamID } = useParams()

  if (!teamID) {
    return null
  }

  return (
    <PageWrapper>
      <DrawerTeam teamID={teamID}>
        <Navigation />
      </DrawerTeam>
      <Suspense fallback={<div>Loading Team...</div>}>
        <Switch>
          <Route path={path} exact>
            <Details />
          </Route>
          <Route path={`${path}/details`}>
            <Details />
          </Route>
        </Switch>
      </Suspense>
    </PageWrapper>
  )
}
