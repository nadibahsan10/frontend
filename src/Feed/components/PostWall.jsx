import React from "react";
import { Box } from "@mui/material";

import Post from "./Post";
import "./PostWall.css";
const PostWall = () => {
  return (
    <Box
      marginTop={2}
      component="form"
      padding={1.5}
      sx={{
        backgroundColor: "#FFFFFF",
        minHeight: "100px",
        borderRadius: "4px",
      }}
    >
      <Post />
    </Box>
  );
};

export default PostWall;
