import { Typography, Button, Box } from "@mui/material";

const PetitionerDashboard = () => {
  return (
    <Box mt={3}>
      <Typography variant="h4" gutterBottom>
        Your Petitions
      </Typography>
      <Button variant="contained" color="primary">
        Create New Petition
      </Button>
    </Box>
  );
};

export default PetitionerDashboard;
