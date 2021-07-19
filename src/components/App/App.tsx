import React from "react";

import { Route, Switch } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";

import Header from "../Header";

import routes from "../../routes";

const App: React.FC = () => (
  <>
    <CssBaseline />
    <Header />
    <Switch>
      {Object.values(routes).map(({ component: Component, path }) => (
        <Route path={path} key={path}>
          <Component />
        </Route>
      ))}
    </Switch>
  </>
);

export default App;
