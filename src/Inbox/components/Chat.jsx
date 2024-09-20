import React from "react";
import {
  Box,
  Button,
  Container,
  Avatar,
  Typography,
  TextField,
} from "@mui/material";

import { useLocation } from "react-router-dom";
import Message from "./Message";
const Chat = () => {
  const location = useLocation();

  console.log(location.pathname);
  if (location.pathname === "/inbox") {
    return (
      <Box
        height={400}
        padding={1}
        marginBottom={2}
        overflow="auto"
        backgroundColor="#EBEBEB"
        borderRadius={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h3" textAlign="center">
          No Messages
        </Typography>
      </Box>
    );
  }
  return (
    <>
      <Box marginBottom={2} display="flex" alignItems="center" gap={2}>
        <Avatar />
        <Typography variant="body1" color="initial">
          MD Nadib Ahsan
        </Typography>
      </Box>
      <Box
        height={400}
        padding={1}
        marginBottom={2}
        overflow="auto"
        backgroundColor="#EBEBEB"
        borderRadius={1}
        display="flex"
        flexDirection="column"
      >
        <Message sent />
        <Message />
        <Message sent />
        <Message />
        <Message sent />
        <Message />
        <Message sent />
        <Message />
      </Box>

      <Box display="flex" gap={2}>
        <TextField label="Search" fullWidth />
        <Button variant="contained">Send</Button>
      </Box>
    </>
  );
};

export default Chat;
