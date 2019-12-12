import React from "react"
import decoratorCentered from "@storybook/addon-centered"
import { Drawer } from "."

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Drawer",
  decorators: [decoratorCentered],
}

export const example = () => <Drawer />
