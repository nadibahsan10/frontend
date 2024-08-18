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
import AddCommentIcon from "@mui/icons-material/AddComment";

import ImageItems from "./subComponentsPost/ImageItems";
import CommentBox from "./subComponentsPost/CommentBox";
import "./Post.css";
const Post = () => {
  const [commentModal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(close);
  };

  return (
    <Grid container spacing={1} sx={{ position: "relative" }}>
      <IconButton
        color="primary"
        sx={{ position: "absolute", top: "10px", right: "0px" }}
      >
        <SettingsIcon />
      </IconButton>
      <Grid item xs={1}>
        <Avatar src="./profileImage.webp" />
      </Grid>
      <Grid item xs={10}>
        <Typography variant="body1" sx={{ fontWeight: "500" }}>
          MD Nadib Ahsan
        </Typography>
        <Typography variant="caption">10 Minutes Ago, 1 July 2024</Typography>

        <Typography
          sx={{ marginTop: "10px", marginBottom: "5px" }}
          variant="h6"
        >
          Title of the Question
        </Typography>

        <Typography variant="subtitle1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione fuga
          quos molestiae ab. Exercitationem quam repellat neque laborum, dolore
          nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tenetur, sit animi numquam esse ipsa aliquam ullam velit! Quia animi
          dolorem, similique provident aperiam porro enim, cupiditate
          accusantium nulla doloremque quod.
        </Typography>

        <ImageItems />

        <Box display="flex" gap={1}>
          <Button startIcon={<FavoriteBorderIcon />} variant="outlined">
            Like
          </Button>

          <Button
            startIcon={<AddCommentIcon />}
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
