import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Rubik, sans-serif",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 900,
      lg: 1320,
      xl: 1536,
    },
  },
  palette: {
    // type: "dark",
    // primary: yellow,
    // secondary: orange,
    // background: {
    //   default: "#202020",
    // },
  },
  overrides: {
    MuiLink: {
      root: {
        textDecoration: "none",
        color: "inherit",
      },
    },
  },
});

declare module "styled-components" {
  type ThemeType = typeof theme;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  export type DefaultTheme = {
    [key in keyof typeof theme]: typeof theme[key];
  };
}

export default theme;
