import React from "react"
import ReactDOM from "react-dom"
import { App } from "./components/App"
import { config } from "./config"
import { ConsoleLogger } from "./lib/console-logger"
import { Teamio } from "./lib/teamio"
import * as serviceWorker from "./serviceWorker"

const logger = new ConsoleLogger()
const teamService = new Teamio(config.teamService)

ReactDOM.render(
  <App logger={logger} teamService={teamService} />,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
