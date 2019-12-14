import React from "react"
import { Private } from "../Example/Private" // XXX: Not allowed! This should cause the `deps:report` and `deps:ci` to fail

export function RuleBreaker() {
  return (
    <div className="RuleBreaker">
      <Private />
    </div>
  )
}
