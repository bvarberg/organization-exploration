import { DefaultTheme } from "styled-components"

export const theme: DefaultTheme = {
  spacing: (n: number) => `${4 * n}px`,
  palette: {
    primary: "#fed9e1",
    secondary: "#1e9def",
  },
}
