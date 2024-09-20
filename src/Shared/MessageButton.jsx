import React, { useState, useContext } from "react";
import { Box, Button } from "@mui/material";
import axios from "axios";

import { AuthContext } from "../Auth/AuthContext";

const MessageButton = ({ id }) => {
  const auth = useContext(AuthContext);
  const addToInbox = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.post(
        `http://localhost:3000/chat/add`,
        { chat: id },
        {
          headers: {
            Authorization: "Baerer " + token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <Button variant="contained" onClick={addToInbox}>
      Message
    </Button>
  );
};

export default MessageButton;
