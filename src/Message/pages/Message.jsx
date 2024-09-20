import React, { useState, useEffect, useContext } from "react";
import { Container, TextField, Box, Grid, Button } from "@mui/material";
import { io } from "socket.io-client";

import ProfilePicture from "../../Shared/NameAvatar";
import Participants from "../components/Participants";
import Conversation from "../components/Conversation";
import SendIcon from "@mui/icons-material/Send";
import { AuthContext } from "../../Auth/AuthContext";
import "./Message.css";

const socket = io("http://localhost:3000/chat");
const Message = () => {
  const auth = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for messages from the server
    socket.emit("register", auth.id);

    socket.on("receiveMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      console.log(messages);
    });

    return () => {
      socket.off("receiveMessage");
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit("sendMessage", {
      message,
      reciverId: "eaff1cd8-8994-4c1b-a831-f4c8bd62a2c2",
    }); // Send message to the server
    setMessage("");
  };
  return (
    <Container>
      <Grid container sx={{ marginTop: "50px" }}>
        <Grid xs={4} item className="message-search">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Search Conversation"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={8}>
          <Box marginLeft={2}>
            <ProfilePicture />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <div className="chats">
            <Participants />
            <Participants />
            <Participants />
            <Participants />
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className="conversation">
            <Conversation />
          </div>
          <div className="message-input">
            <Grid container>
              <Grid item xs={10}>
                <TextField
                  variant="outlined"
                  label="Write a Message"
                  fullWidth
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  onClick={sendMessage}
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ marginLeft: "5px", height: "55px" }}
                >
                  <SendIcon />
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Message;
