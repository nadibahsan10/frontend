import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Avatar,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";

import SettingsIcon from "@mui/icons-material/Settings";
import CommentIcon from "@mui/icons-material/Comment";

import ImageItems from "./subComponentsPost/ImageItems";
import CommentBox from "./subComponentsPost/CommentBox";
import Likes from "./subComponentsPost/Likes";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Post.css";
import axios from "axios";
import { AuthContext } from "../../Auth/AuthContext";

const Post = ({
  id,
  uid,
  name,
  profilePicture,
  date,
  title,
  content,
  imageUrl,
  reload,
  loading,

  setChange,
}) => {
  const auth = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [commentModal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeletePost = async () => {
    handleClose();

    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.delete(
        `http://localhost:3000/feed/deletepost/${id}`,
        {
          headers: {
            Authorization: "Baerer " + token,
          },
        }
      );
      console.log(response.data);
      loading();
      setChange((prev) => prev + 1);
    } catch (error) {
      console.log(error.response.data);
    }
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
      <Box sx={{ position: "absolute", top: "10px", right: "10px" }}>
        <IconButton
          color="primary"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <SettingsIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Save</MenuItem>
          {auth.id === uid && (
            <MenuItem onClick={handleClose}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`edit/${id}`}
              >
                Edit
              </Link>
            </MenuItem>
          )}

          <MenuItem onClick={handleClose}>Report</MenuItem>
          {auth.id === uid && (
            <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
          )}
        </Menu>
      </Box>
      <Grid item xs={1.2}>
        <Avatar src={`http://localhost:3000/${profilePicture}`} />
      </Grid>
      <Grid item xs={10}>
        <Typography variant="body1" sx={{ fontWeight: "500" }}>
          {name}
        </Typography>
        <Typography variant="caption">
          {new Date(date).toLocaleString()}
        </Typography>

        <Typography
          sx={{ marginTop: "10px", marginBottom: "5px" }}
          variant="h4"
          fontWeight="bold"
        >
          {title}
        </Typography>

        <Typography variant="subtitle1">{content}</Typography>

        {imageUrl.length !== 0 && <ImageItems image={imageUrl} />}

        <Box display="flex" gap={1}>
          <Likes postId={id} />
          <Button
            startIcon={<CommentIcon />}
            onClick={openModal}
            variant="outlined"
          >
            Awnser
          </Button>
        </Box>
        <CommentBox show={commentModal} postId={id} handleClose={closeModal} />
      </Grid>
    </Grid>
  );
};

export default Post;
