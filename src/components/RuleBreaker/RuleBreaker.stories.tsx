import React from "react"
import decoratorCentered from "@storybook/addon-centered"
import { RuleBreaker } from "."

export default {
  title: "RuleBreaker",
  decorators: [decoratorCentered],
}

export const example = () => <RuleBreaker />
