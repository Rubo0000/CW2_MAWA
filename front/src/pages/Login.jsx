import React from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";

function Login() {
  return (
    <Container>
      <Typography variant="h4" sx={{ marginY: 3 }}>
        Login
      </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField label="Password" variant="outlined" type="password" fullWidth />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
