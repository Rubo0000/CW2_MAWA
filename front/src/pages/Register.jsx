import { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bioId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    console.log("Register with:", formData);
  };

  return (
    <Paper elevation={3} style={{ padding: "2rem", maxWidth: "400px", margin: "2rem auto" }}>
      <Typography variant="h5" gutterBottom>
        Register
      </Typography>
      <Box display="flex" flexDirection="column" gap="1rem">
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          label="Bio ID"
          name="bioId"
          variant="outlined"
          fullWidth
          value={formData.bioId}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleRegister}>
          Register
        </Button>
      </Box>
    </Paper>
  );
};

export default Register;
