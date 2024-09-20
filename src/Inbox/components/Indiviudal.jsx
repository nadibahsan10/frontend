import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

import NameAvatar from "../../Shared/NameAvatar";
const Indiviudal = () => {
  return (
    <Button
      sx={{ marginTop: 2 }}
      component={Link}
      to="reciverId"
      variant="outlined"
      fullWidth
    >
      <Box padding={1}>
        <NameAvatar />
      </Box>
    </Button>
  );
};

export default Indiviudal;
