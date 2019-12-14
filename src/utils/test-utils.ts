import { render } from "@testing-library/react"
import React from "react"
import { TestThemeProvider } from "./test/TestThemeProvider"

export function renderWithTheme(ui: React.ReactElement, options?: any) {
  return render(ui, { wrapper: TestThemeProvider, ...options })
}
