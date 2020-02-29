import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../../theme"

export function TestThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
