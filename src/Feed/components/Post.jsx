import React, { useState } from "react";
import {
  Grid,
  Avatar,
  Typography,
  IconButton,
  ImageList,
  ImageListItem,
  Box,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import CommentIcon from "@mui/icons-material/Comment";

import ImageItems from "./subComponentsPost/ImageItems";
import CommentBox from "./subComponentsPost/CommentBox";
import "./Post.css";
const Post = ({
  id,
  name,
  uid,
  profilePicture,
  date,
  title,
  content,
  imageUrl,
}) => {
  const [commentModal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(close);
  };

  return (
    <Grid
      container
      padding={1.5}
      sx={{
        marginBottom: "15px",
        backgroundColor: "#FFFFFF",
        minHeight: "100px",
        borderRadius: "4px",
        position: "relative",
      }}
    >
      <IconButton
        color="primary"
        sx={{ position: "absolute", top: "10px", right: "10px" }}
      >
        <SettingsIcon />
      </IconButton>
      <Grid item xs={1.2}>
        <Avatar src={`http://localhost:3000/${profilePicture}`} />
      </Grid>
      <Grid item xs={10}>
        <Typography variant="body1" sx={{ fontWeight: "500" }}>
          {name}
        </Typography>
        <Typography variant="caption">{date}</Typography>

        <Typography
          sx={{ marginTop: "10px", marginBottom: "5px" }}
          variant="h6"
        >
          {title}
        </Typography>

        <Typography variant="subtitle1">{content}</Typography>

        <ImageItems image={imageUrl} />

        <Box display="flex" gap={1}>
          <Button startIcon={<FavoriteBorderIcon />} variant="outlined">
            Like
          </Button>

          <Button
            startIcon={<CommentIcon />}
            onClick={openModal}
            variant="outlined"
          >
            Awnser
          </Button>
        </Box>
        <CommentBox show={commentModal} handleClose={closeModal} />
      </Grid>
    </Grid>
  );
};

export default Post;
