import React from "react";

import { ThemeProvider } from "styled-components";

import { MuiThemeProvider } from "@material-ui/core";

import RequestForm from "../RequestForm";
import theme from "../../styling/theme";

const App: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <RequestForm />
    </ThemeProvider>
  </MuiThemeProvider>
);

export default App;
