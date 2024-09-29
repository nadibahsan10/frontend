import React, { useState, useContext } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useFetch from "../CustomHooks/useFetch";
import axios from "axios";

import { AuthContext } from "../Auth/AuthContext";

const MessageButton = ({ id }) => {
  const { data, isLoading, isError } = useFetch({
    url: `http://localhost:3000/chat/userbyid`,
    queryKey: ["getUser", id],
    params: { id },
  });
  console.log(data);
  const navigate = useNavigate();
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
      navigate(`/inbox/${id}`, {
        state: {
          name: data?.first_name + " " + data?.last_name,
          profile: "http://localhost:3000/" + data?.profile_picture,
        },
      });
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
