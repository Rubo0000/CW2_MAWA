import { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login with:", email, password);
  };

  return (
    <Paper elevation={3} style={{ padding: "2rem", maxWidth: "400px", margin: "2rem auto" }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <Box display="flex" flexDirection="column" gap="1rem">
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Paper>
  );
};

export default Login;
