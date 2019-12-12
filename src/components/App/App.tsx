import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import logo from "../../assets/logo.svg"
import { AppBar } from "../AppBar"
import "./App.css"

const theme = {
  primaryColor: "#cccccc",
  spacing: (n: number) => `${n}px`,
}

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <AppBar />
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          </Route>
          {/* TODO: All top-level routes/paths go here (but not their children?) */}
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
