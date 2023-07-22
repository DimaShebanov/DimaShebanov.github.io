import React from "react";

import { Route, Switch } from "react-router-dom";

import { CssBaseline } from "@mui/material";

import routes from "../../routes";

const App: React.FC = () => (
  <>
    <CssBaseline>
      <Switch>
        {Object.values(routes).map(({ component: Component, path }) => (
          <Route path={path} key={path}>
            <Component />
          </Route>
        ))}
      </Switch>
    </CssBaseline>
  </>
);

export default App;
