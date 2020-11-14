import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core";
import { color } from "../../shared/style/const";
// import { Drawer } from "./Drawer";

export function TopToolbar() {
  const [menuAnchor, setAnchorEl] = React.useState(false);

  const handleClick = () => {
    setAnchorEl(true);
  };

  return (
    <AppBar position="static">
      <StyledToolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <AiOutlineMenu onClick={handleClick} />
        </IconButton>
        {/* <Drawer open={menuAnchor} /> */}
        <Typography variant="h6" color="inherit">
          Mechanical Toolbox
        </Typography>
      </StyledToolbar>
    </AppBar>
  );
}

const StyledToolbar = withStyles({
  root: {
    backgroundColor: color.primary
  }
})(Toolbar);
