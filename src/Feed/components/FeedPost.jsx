import React, { useContext, useState, useRef, useEffect } from "react";
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
  const imageRef = useRef([]);
  const [images, setImages] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", files: {} });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };
  // useEffect(()=>{
  //   if(images)

  // },[images])

  const selectImageHandler = () => {
    imageRef.current.click();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };
  const handleImageUplaod = (event) => {
    const { files } = event.target;
    setImages(Object.values(files));
    setForm((prev) => {
      return { ...prev, files: { ...files } };
    });
  };
  const discardImage = (indexToRemove) => {
    setImages((prev) => {
      return prev.filter((_, index) => index !== indexToRemove);
    });
  };
  return (
    <Box
      padding={1.5}
      sx={{
        backgroundColor: "#FFFFFF",

        borderRadius: "4px",
      }}
    >
      <Grid
        container
        spacing={1}
        component="form"
        onSubmit={handleSubmit}
        method="POST"
        encType="multipart/form-data"
      >
        <Grid item xs={1}>
          <Avatar src={`http://localhost:3000/${auth.profilePicture}`} />
        </Grid>
        <Grid item xs={10}>
          <TextField
            name="title"
            value={form.title}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            label="Question Title"
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            name="description"
            value={form.description}
            fullWidth
            onChange={handleChange}
            variant="outlined"
            label="Question Description"
            multiline
            minRows={4}
          />
          <Box sx={{ display: "flex", marginTop: "15px", width: "100%" }}>
            {images &&
              images.map((item, index) => {
                return (
                  <Badge
                    key={index}
                    sx={{ marginRight: "10px" }}
                    overlap="circular"
                    badgeContent={
                      <IconButton
                        color="white"
                        onClick={() => {
                          discardImage(index);
                        }}
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    }
                  >
                    <Avatar
                      src={URL.createObjectURL(item)}
                      sx={{ height: "50px", width: "50px" }}
                      variant="rounded"
                    />
                  </Badge>
                );
              })}

            <Button
              color="primary"
              variant="outlined"
              sx={{ marginRight: "10px" }}
              onClick={selectImageHandler}
            >
              <AddPhotoAlternateIcon fontSize="large" />
            </Button>
            <input
              type="file"
              ref={imageRef}
              name="images"
              style={{ display: "none" }}
              multiple
              onChange={handleImageUplaod}
            />

            <Button
              type="submit"
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
