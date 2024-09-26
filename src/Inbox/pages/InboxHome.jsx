import React, { useContext } from "react";
import { Grid, Container, Box, TextField, Button } from "@mui/material";
import Indiviudal from "../components/Indiviudal";
import Chat from "../components/Chat";

import { Link } from "react-router-dom";

import NameAvatar from "../../Shared/NameAvatar";
import useFetch from "../../CustomHooks/useFetch";
import { AuthContext } from "../../Auth/AuthContext";

const InboxHome = () => {
  const auth = useContext(AuthContext);
  const { data, error, isLoading } = useFetch({
    url: "http://localhost:3000/chat/getinbox",
    queryKey: ["getinbox", auth.id], // queryKey as an array
    // GET request (this is default, so it's optional)
  });
  console.log(data);

  return (
    <Container>
      <Box padding={3}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField label="Search" fullWidth />
            <Box>
              {data?.map((item) => {
                return (
                  <Indiviudal
                    name={item.first_name + " " + item.last_name}
                    profile={`http://localhost:3000/${item.profile_picture}`}
                    id={item.id}
                    key={item.id}
                  />
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Chat />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default InboxHome;
