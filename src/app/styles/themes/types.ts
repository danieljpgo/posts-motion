export interface Props{
  theme: Theme,
}

interface Theme{
  title: string,
  unit: number,
  colors: Colors,
  shapes: Shapes,
  breakpoints: Breakpoints,
  fontSize: FontSize,
}

interface Colors{
  primary: string,
  secundary: string,
  warning: string,
  divider: string,
  text: string,
  subtext: string,
  title: string,
  background: string,
}

interface Shapes{
  borderRadius: number,
}

interface Breakpoints{
  small: number,
  medium: number,
}

interface FontSize{
  big: number,
  large: number,
  medium: number,
  small: number,
}
