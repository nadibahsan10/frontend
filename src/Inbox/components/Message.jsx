import React from "react";
import {
  Box,
  Button,
  Container,
  Avatar,
  Typography,
  TextField,
} from "@mui/material";

const Message = ({ sent, message }) => {
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
          {message}
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
      <Typography variant="body1">{message}</Typography>
    </Box>
  );
};

export default Message;
