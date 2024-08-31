import React from "react";
import {
  Box,
  Container,
  Button,
  IconButton,
  Typography,
  Avatar,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

import NameAvatar from "../../Shared/NameAvatar";
import Posts from "./Posts";
import Reactions from "./Reactions";
import SingleComment from "./SingleComment";
const Comment = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };
  return (
    <Container sx={{ marginTop: 2 }}>
      <IconButton
        size="large"
        onClick={backHandler}
        color="primary"
        sx={{ marginBottom: 2 }}
      >
        <ArrowBackIcon fontSize="large" />
      </IconButton>
      <Posts />
      <Box
        padding={4}
        marginBottom={2}
        borderRadius={2}
        border="2px solid #EBEBEB"
        position="relative"
      >
        <Box display="flex" gap={2} position="relative">
          <IconButton
            sx={{ position: "absolute", top: 3, left: 65, zIndex: 20 }}
          >
            <CropOriginalIcon fontSize="large" />
          </IconButton>
          <IconButton
            sx={{ position: "absolute", top: 3, left: 105, zIndex: 20 }}
          >
            <SendIcon fontSize="large" color="primary" />
          </IconButton>
          <Avatar
            sx={{ height: 50, width: 50 }}
            src="Frontend\public\profileImage.webp"
          />
          <TextField
            variant="outlined"
            multiline
            minRows={2}
            fullWidth
            placeholder="Commnet"
            sx={{
              "& .MuiInputBase-root": {
                paddingTop: 6, // Adjust padding inside the TextField
              },
            }}
          />
        </Box>

        <SingleComment IsDelete />
        <SingleComment />
        <SingleComment />
        <SingleComment />
      </Box>
    </Container>
  );
};

export default Comment;
