import React from "react";
import { Paper, Typography, Button, Box } from "@mui/material";

function PetitionCard({ title, content, onSign }) {
  return (
    <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1" sx={{ marginY: 1 }}>
        {content}
      </Typography>
      <Box sx={{ textAlign: "right" }}>
        <Button variant="contained" color="primary" onClick={onSign}>
          Sign Petition aaaa
        </Button>
      </Box>
    </Paper>
  );
}

export default PetitionCard;
