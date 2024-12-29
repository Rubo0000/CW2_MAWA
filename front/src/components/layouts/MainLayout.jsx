import Navbar from "../navbar/Navbar";
import { Container } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
        {children}
      </Container>
    </div>
  );
};

export default MainLayout;
