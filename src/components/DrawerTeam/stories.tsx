import decoratorCentered from "@storybook/addon-centered/react"
import React from "react"
import { DrawerTeam } from "."

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "DrawerTeam",
  decorators: [decoratorCentered],
}

export const example = () => <DrawerTeam teamID={"123"} />
