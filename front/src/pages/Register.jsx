import React from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";

function Register() {
  return (
    <Container>
      <Typography variant="h4" sx={{ marginY: 3 }}>
        Register
      </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Full Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField label="Password" variant="outlined" type="password" fullWidth />
        <TextField label="BioID" variant="outlined" fullWidth />
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </Box>
    </Container>
  );
}

export default Register;
