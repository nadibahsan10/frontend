import React from "react";
import {
  Box,
  Button,
  Container,
  Avatar,
  Typography,
  TextField,
} from "@mui/material";

import { Routes, Route } from "react-router-dom";

import Text from "./Text";
const Chat = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
        <Route path="/:reciverId" element={<Text />} />
      </Routes>
    </>
  );
};

export default Chat;
