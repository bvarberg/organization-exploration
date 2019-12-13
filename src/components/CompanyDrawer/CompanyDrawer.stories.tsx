import React from "react"
import decoratorCentered from "@storybook/addon-centered"
import { CompanyDrawer } from "."

export default {
  title: "CompanyDrawer",
  decorators: [decoratorCentered],
}

export const example = () => <CompanyDrawer companyId="124" />
