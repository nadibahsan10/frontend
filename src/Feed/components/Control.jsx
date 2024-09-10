import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Control = () => {
  return (
    <Box
      padding={6}
      marginTop={2}
      marginBottom={2}
      borderRadius={2}
      border="2px solid #EBEBEB"
    >
      <Typography variant="h5" textTransform="uppercase">
        Control panel
      </Typography>
      <hr />
      <Button fullWidth variant="outlined" component={Link} to="">
        Home
      </Button>
      <Button fullWidth variant="outlined" component={Link} to="chatGpt">
        Gemini Ai
      </Button>
      <Button fullWidth variant="outlined" component={Link} to="myfeed">
        My Post
      </Button>
      <Button fullWidth variant="outlined" component={Link} to="users">
        Users
      </Button>
    </Box>
  );
};

export default Control;
