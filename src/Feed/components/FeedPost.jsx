import React, { useContext } from "react";
import {
  Box,
  TextField,
  Button,
  Avatar,
  IconButton,
  Badge,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import { AuthContext } from "../../Auth/AuthContext";
import "./FeedPost.css";

const FeedPost = () => {
  const auth = useContext(AuthContext);
  return (
    <Box
      component="form"
      padding={1.5}
      sx={{
        backgroundColor: "#FFFFFF",

        borderRadius: "4px",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Avatar src={`http://localhost:3000/${auth.profilePicture}`} />
        </Grid>
        <Grid item xs={10}>
          <TextField
            fullWidth
            variant="outlined"
            label="Question Title"
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Question Description"
            multiline
            minRows={4}
          />
          <Box sx={{ display: "flex", marginTop: "15px", width: "100%" }}>
            <Badge
              sx={{ marginRight: "10px" }}
              overlap="circular"
              badgeContent={
                <IconButton color="white">
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
            >
              <Avatar
                src="/profileImage.webp"
                sx={{ height: "50px", width: "50px" }}
                variant="rounded"
              />
            </Badge>

            <Button
              color="primary"
              variant="outlined"
              sx={{ marginRight: "10px" }}
            >
              <AddPhotoAlternateIcon fontSize="large" />
            </Button>
            <input type="file" name="images" style={{ display: "none" }} />

            <Button
              sx={{ marginLeft: "auto" }}
              color="primary"
              variant="contained"
            >
              Post
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeedPost;
