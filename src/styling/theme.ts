import { createTheme } from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";
import yellow from "@material-ui/core/colors/yellow";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: yellow,
    secondary: orange,
    background: {
      default: "#202020",
    },
  },
  overrides: {
    MuiFormLabel: {},
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
