import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    spacing: (n: number) => string
    palette: {
      primary: string
      secondary: string
    }
  }
}
