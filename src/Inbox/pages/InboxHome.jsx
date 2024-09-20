import React from "react";
import { Grid, Container, Box, TextField } from "@mui/material";
import Indiviudal from "../components/Indiviudal";
import Chat from "../components/Chat";

const InboxHome = () => {
  return (
    <Container>
      <Box padding={3}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField label="Search" fullWidth />
            <Box>
              <Indiviudal />
              <Indiviudal />
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
