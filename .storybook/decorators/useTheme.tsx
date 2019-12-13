import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  spacing: (n: number) => `${n * 4}px`,
  primaryColor: "#fed9e1"
}

export function useTheme(storyFn: any) {
  return (
    <ThemeProvider theme={theme}>
      {storyFn()}
    </ThemeProvider>
  )
}