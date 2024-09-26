import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

import NameAvatar from "../../Shared/NameAvatar";

const Indiviudal = ({ name, profile, id }) => {
  return (
    <Button
      sx={{ marginTop: 2 }}
      component={Link}
      to={id}
      state={{ name, profile }}
      variant="outlined"
      fullWidth
    >
      <Box marginRight={10} padding={1}>
        <NameAvatar name={name} src={profile} />
      </Box>
    </Button>
  );
};

export default Indiviudal;
