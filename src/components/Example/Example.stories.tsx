import decoratorCentered from "@storybook/addon-centered"
import React from "react"
import { Example } from "."

export default {
  title: "Example",
  decorators: [decoratorCentered],
}

export const example = () => <Example />
