import { createTheme } from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";
import yellow from "@material-ui/core/colors/yellow";
import common from "@material-ui/core/colors/common";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: yellow,
    secondary: orange,
    background: {
      default: common.black,
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

console.log("theme", theme);

export default theme;
