import React from "react";
import ReactDOM from "react-dom";
import "./firebase/localFirebase";

import "./index.css";

import { ThemeProvider } from "styled-components";

import { MuiThemeProvider } from "@material-ui/core";

import { Router } from "react-router-dom";

import { createBrowserHistory } from "history";

import { QueryClientProvider } from "react-query";

import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import theme from "./styling/theme";
import SnackbarProvider from "./components/SnackbarProvider";
import { queryClient } from "./store/queryClient";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider>
            <Router history={history}>
              <App />
            </Router>
          </SnackbarProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
