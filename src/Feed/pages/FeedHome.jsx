import React from "react";
import { Box, Button, Container, Grid } from "@mui/material";

import Wall from "../components/Wall";

const FeedHome = () => {
  return (
    <Container maxWidth="lg">
      <Grid container gap={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Wall />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Container>
  );
};

export default FeedHome;
