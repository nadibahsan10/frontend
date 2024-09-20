import React from "react";
import {
  Box,
  Button,
  Container,
  Avatar,
  Typography,
  TextField,
} from "@mui/material";

const Message = ({ sent }) => {
  if (sent) {
    return (
      <Box
        sx={{ backgroundColor: "primary.main", maxWidth: "70%" }}
        alignSelf="flex-end"
        padding={2}
        marginTop={2}
        borderRadius={1}
      >
        <Typography variant="body1" color="white.main">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum
          numquam architecto. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. At nulla sequi officia in quisquam iusto nemo harum
          aliquid ut impedit.
        </Typography>
      </Box>
    );
  }
  return (
    <Box
      sx={{ backgroundColor: "white.main", maxWidth: "70%" }}
      alignSelf="flex-start"
      padding={2}
      marginTop={2}
      borderRadius={1}
    >
      <Typography variant="body1">Lorem ipsum dolor sit amet c</Typography>
    </Box>
  );
};

export default Message;
