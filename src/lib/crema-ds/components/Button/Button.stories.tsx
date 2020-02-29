import decoratorCentered from "@storybook/addon-centered/react"
import React from "react"
import { Button } from "./Button"

export default {
  title: "crema-ds|Button",
  decorators: [decoratorCentered],
}

export const example = () => <Button>Example</Button>
