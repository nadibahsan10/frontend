// StoryCard.js
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const StoryCard = ({ story }) => {
  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        image={story.image} // Use a URL or local path for the image
        alt={story.title}
        sx={{
          width: "100%", // Make the image full width
          height: "auto", // Maintain aspect ratio
        }}
      />
      <CardContent>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {story.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {story.content}
        </Typography>
        <Typography variant="caption" sx={{ mt: 1 }}>
          By: {story.author}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary">
          {story.favorites} {/* Optionally show the number of favorites */}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default StoryCard;
