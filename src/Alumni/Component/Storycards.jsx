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
        image={`http://localhost:3000/${story.image_url}`} // Use image_url from the query result
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
          {story.description} {/* Updated to use description */}
        </Typography>
        <Typography variant="caption" sx={{ mt: 1 }}>
          By: {story.first_name} {story.last_name}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary">
          {story.reactions} {/* Show the number of reactions */}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default StoryCard;
