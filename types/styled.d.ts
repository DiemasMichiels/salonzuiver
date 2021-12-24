// styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      black: string
      brand: string
      elements: string
      backgroundColor: string
    }
    fonts: {
      brand: string
    }
  }
}
