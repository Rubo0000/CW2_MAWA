import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SLPP
        </Typography>
        <Box>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/register">Register</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
