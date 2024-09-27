import React from "react";
import { Box, Container, Grid, TextField, Button } from "@mui/material";
import FilterMarket from "../Component/FilterMarket";
import MyListings from "../Component/MyListings";

const MyProduct = () => {
  return (
    <Container sx={{ marginTop: 2 }} maxWidth="xl">
      <Grid container>
        <Grid item xs={12} sx={{ backgroundColor: "#F08080" }}>
          <Box
            display="flex"
            gap={2}
            padding={3}
            alignItems="center"
            justifyContent="start"
          >
            <h4>My Listings</h4>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <h1>SideNav</h1>
        </Grid>
        <Grid item xs={0.2}></Grid>

        <Grid item xs={8.8}>
          <MyListings />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyProduct;
