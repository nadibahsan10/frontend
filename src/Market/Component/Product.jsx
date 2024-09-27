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

const Product = ({item}) => {
 const image_url= JSON.parse(item.image_url);
  return (
    <Grid item xs={4}>
      <Box backgroundColor="#F0F0F0" borderRadius={1}>
        <Avatar
          variant="rounded"
          src={item.image_url}
          sx={{ height: 200, width: "100%" }}
        />
        <Box padding={2}>
          <Typography variant="h6" color="secondary">
            {item.title}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            Tk {item.price}
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
            {item.description}
          </Typography>
          <Typography variant="body1" fontWeight={700} color="initial">
            Status : {item.status}
          </Typography>
        </Box>
        <Box display="flex" padding={2}>
          <IconButton>
            <BookmarkAddIcon />
          </IconButton>
          <Button
            sx={{ marginLeft: "auto" }}
            component={Link}
            to={`/market/individualproduct/${item.id}`}
            state= { {item} }  
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
