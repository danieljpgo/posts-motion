export interface Props{
  theme: Theme,
}

export interface Theme{
  title: string,
  unit: number,
  colors: Colors,
  shapes: Shapes,
  breakpoints: Breakpoints,
}

export interface Colors{
  primary: string,
  secundary: string,
  warning: string,
  divider: string,
  text: string,
  title: string,
  background: string,
}

export interface Shapes{
  borderRadius: number,
}

export interface Breakpoints{
  small: number,
  medium: number,
}
