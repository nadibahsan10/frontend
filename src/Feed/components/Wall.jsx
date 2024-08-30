import { Box } from "@mui/material";
import React from "react";
import PostField from "./PostField";
import Posts from "./Posts";

const Wall = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <PostField />
      <Posts />
    </Box>
  );
};

export default Wall;
