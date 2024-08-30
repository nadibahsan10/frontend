import React, { useRef } from "react";
import { Box, TextField, Typography, Button, Avatar } from "@mui/material";

import PreviewImage from "./PreviewImage";

const a = [];
const PostField = () => {
  const imageRef = useRef([]);
  const clickInput = () => {
    imageRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      height="auto"
      width="100%"
      sx={{ backgroundColor: "primary.main" }}
      marginTop={2}
      marginBottom={2}
      borderRadius={1}
      padding={2}
    >
      <input type="file" ref={imageRef} multiple style={{ display: "none" }} />

      <Typography variant="h6" textAlign="center">
        WRITE YOUR QUESTIONS
      </Typography>
      <TextField variant="outlined" label="Title" fullWidth />

      <TextField
        variant="outlined"
        label="Description"
        multiline
        sx={{ marginTop: 2, marginBottom: 2 }}
        minRows={4}
        fullWidth
      />
      <PreviewImage clickInput={clickInput} images={a} />
      <Box display="flex" alignItems="center">
        <Button
          sx={{ marginLeft: "auto", marginRight: 2 }}
          variant="outlined"
          color="secondary"
          onClick={clickInput}
        >
          Add Image
        </Button>
        <Button type="submit" variant="contained">
          POST
        </Button>
      </Box>
    </Box>
  );
};

export default PostField;
