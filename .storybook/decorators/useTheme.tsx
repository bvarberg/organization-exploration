import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  spacing: (n: number) => `${n}px`,
}

export function useTheme(storyFn: any) {
  return (
    <ThemeProvider theme={theme}>
      {storyFn()}
    </ThemeProvider>
  )
}