import React from "react"
import decoratorCentered from "@storybook/addon-centered"
import { Example } from "."

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Example",
  decorators: [decoratorCentered],
}

export const example = () => <Example name="Example" />
