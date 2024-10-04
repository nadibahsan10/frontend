import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import UserProfile from "../components/UserProfile";
import UserInfo from "../components/UserInfo";
import Tabs from "../components/Tabs";

const ProfileHome = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={5} /* Add spacing between grid items */>
        {/* Profile Section */}
        <Grid item xs={12} md={3} /* Responsive widths */>
          <Box sx={{ position: "relative" }}>
            {" "}
            {/* Ensuring no overlap */}
            <UserProfile />
          </Box>
        </Grid>

        {/* User Info Section */}
        <Grid item xs={12} md={9} /* Responsive widths */>
          <Box sx={{ position: "relative" }}>
            {/* Ensuring no overlap */}
            <UserInfo />
            <Tabs />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileHome;
