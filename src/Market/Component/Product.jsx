import React from "react";
import {
  Grid,
  Box,
  Avatar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <Grid item xs={4}>
      <Box backgroundColor="#F0F0F0" borderRadius={1}>
        <Avatar
          variant="rounded"
          src="../profileImage.webp"
          sx={{ height: 200, width: "100%" }}
        />
        <Box padding={2}>
          <Typography variant="h6" color="secondary">
            Title
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            Tk 5000
          </Typography>
          <Typography
            variant="body1"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: 2,
            }}
            gutterBottom
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique, molestiae?
          </Typography>
          <Typography variant="body1" fontWeight={700} color="initial">
            Fashion & life Style
          </Typography>
        </Box>
        <Box display="flex" padding={2}>
          <IconButton>
            <BookmarkAddIcon />
          </IconButton>
          <Button
            sx={{ marginLeft: "auto" }}
            component={Link}
            to="/market/individualproduct/1234"
            variant="contained"
          >
            View
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Product;
