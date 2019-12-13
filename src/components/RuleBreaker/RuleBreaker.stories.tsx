import React from "react"
import decoratorCentered from "@storybook/addon-centered"
import { RuleBreaker } from "."

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "RuleBreaker",
  decorators: [decoratorCentered],
}

export const example = () => <RuleBreaker name="RuleBreaker" />
