import { Card, CardContent, Typography, Button } from "@mui/material";

const PetitionCard = ({ title, content, onClick }) => {
  return (
    <Card style={{ margin: "1rem 0" }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {content}
        </Typography>
        <Button variant="contained" color="primary" onClick={onClick}>
          Support
        </Button>
      </CardContent>
    </Card>
  );
};

export default PetitionCard;
