import React from "react"
import ReactDOM from "react-dom"
import { createApi } from "./api"
import { App } from "./components/App"
import { config } from "./config"
import * as serviceWorker from "./serviceWorker"
import { createLogger } from "./services/Logger"

const api = createApi()
const logger = createLogger(config.logger.type)

ReactDOM.render(
  <App api={api} logger={logger} />,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
