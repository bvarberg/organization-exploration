import React from "react"
import decoratorCentered from "@storybook/addon-centered"
import { Example } from "."

export default {
  title: "Example",
  decorators: [decoratorCentered],
}

export const example = () => <Example />
