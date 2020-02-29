import React from "react"
import { ThemeProvider } from "styled-components"

import { theme } from '../../src/theme'

export function withTheme(storyFn: any) {
  return (
    <ThemeProvider theme={theme}>
      {storyFn()}
    </ThemeProvider>
  )
}