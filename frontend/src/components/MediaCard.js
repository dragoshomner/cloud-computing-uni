import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function MediaCard({ title, content, imageUrl, onButtonClick }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, marginBottom: 10 }}>
      {imageUrl && (
        <CardMedia sx={{ height: 140 }} image={imageUrl} title={title} />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onButtonClick}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
