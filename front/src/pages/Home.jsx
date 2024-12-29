import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h3" gutterBottom>
        Welcome to Shangri-La Petition Platform
      </Typography>
      <Typography variant="h6" gutterBottom>
        Create and support petitions to make a difference.
      </Typography>
      <Box mt={3}>
        <Button variant="contained" color="primary" component={Link} to="/register">
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
