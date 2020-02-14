import React from "react"
import ReactDOM from "react-dom"
import { App } from "./components/App"
import { config } from "./config"
import * as serviceWorker from "./serviceWorker"
import { createLogger } from "./services/Logger"
import { Teamio } from "./teamio"

const logger = createLogger(config.logger.type)
const teamService = new Teamio(config.teamService)

ReactDOM.render(
  <App logger={logger} teamService={teamService} />,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
