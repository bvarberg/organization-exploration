import React from "react"
import { AppBar } from "./AppBar"

export default {
  title: "AppBar",
}

export const example = () => <AppBar />
export const filled = () => (
  <AppBar navigation={<span>Navigation</span>} actions={<span>Action</span>} />
)
