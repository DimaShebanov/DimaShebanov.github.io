import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header: React.FC = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Mama i gus форма заказа
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
