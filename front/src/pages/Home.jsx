import React from "react";
import { Container, Typography } from "@mui/material";
import PetitionCard from "../components/petitioncard/PetitionCard";

function Home() {
  const handleSign = () => {
    alert("You signed the petition!");
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ marginY: 3 }}>
        Welcome to Shangri-La Petition Platform
      </Typography>
      <PetitionCard
        title="Increase Funding for Education"
        content="Request to increase the budget for public education in Shangri-La."
        onSign={handleSign}
      />
    </Container>
  );
}

export default Home;
