import React from "react"

// XXX: Not allowed! This should cause the `deps:report` and `deps:ci` to fail
import { Private } from "../Example/Private"

export function RuleBreaker() {
  return (
    <div className="RuleBreaker">
      <Private />
    </div>
  )
}
