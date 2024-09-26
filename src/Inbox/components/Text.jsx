import React, { useEffect, useState, useContext, useRef } from "react";
import Message from "./Message";
import {
  Box,
  Button,
  Container,
  Avatar,
  Typography,
  TextField,
} from "@mui/material";
import { useLocation, useParams, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthContext";
import useFetch from "../../CustomHooks/useFetch";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000/chat");
const Text = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);

  const endOfMessagesRef = useRef(null);
  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const location = useLocation();
  const { name, profile } = location.state;
  const reciverId = useParams().reciverId;
  const auth = useContext(AuthContext);
  const { data, error, isLoading } = useFetch({
    url: `http://localhost:3000/chat/getmessage`,
    queryKey: ["getMessage", auth.id, reciverId],
    params: { reciverId },
  });

  useEffect(() => {
    scrollToBottom();
  }, [message]); // Dependency on messages to trigger scroll

  useEffect(() => {
    socket.emit("register", auth.id);

    socket.on("receive_message", (data) => {
      setMessage((prev) => {
        return [...prev, data];
      });
      console.log("message Recived", data);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [reciverId]);
  useEffect(() => {
    setMessage([]);
  }, [reciverId]);

  const sendMessage = () => {
    if (input === "") {
      return;
    }
    socket.emit("send_message", {
      senderId: auth.id,
      reciverId,
      message: input,
    });
    setMessage((prev) => {
      return [...prev, { senderId: auth.id, reciverId, message: input }];
    });
    setInput("");
  };

  return (
    <>
      <Box marginBottom={2} display="flex" alignItems="center" gap={2}>
        <Avatar src={profile} />
        <Typography variant="body1" color="initial">
          {name}
        </Typography>
      </Box>
      <Box
        height={600}
        padding={1}
        marginBottom={2}
        overflow="auto"
        backgroundColor="#EBEBEB"
        borderRadius={1}
        display="flex"
        flexDirection="column"
      >
        {data?.map((item, index) => {
          return (
            <Message
              key={index}
              message={item.message}
              sent={item.senderId === auth.id}
            />
          );
        })}
        {message?.map((item, index) => {
          return (
            <Message
              key={index}
              message={item.message}
              sent={item.senderId === auth.id}
            />
          );
        })}
        <div ref={endOfMessagesRef} />
      </Box>

      <Box display="flex" gap={2}>
        <TextField
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          label="Search"
          fullWidth
        />
        <Button onClick={sendMessage} variant="contained">
          Send
        </Button>
      </Box>
    </>
  );
};

export default Text;
