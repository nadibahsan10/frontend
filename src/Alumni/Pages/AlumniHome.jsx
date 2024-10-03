import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import MyList from "../Component/MyList";
import LeftNav from "../Component/LeftNav";
import ProfileCards from "../Component/ProfileCards";

function AlumniHome() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center", padding: "10px" }}>
          Welcome to UIU Alumni Portal
        </Typography>
        <Grid container spacing={2} sx={{padding: 2}}>
          {/* Left Side */}
          <LeftNav />

          {/*main body*/}

          <Grid item xs={7} sx={{ padding: 2 }}>
          <ProfileCards />
          </Grid>
          {/* Right Side */}
          <Grid item xs={3} sx={{ backgroundColor: "white", padding: 2 ,margin: 0}}>
            <MyList />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AlumniHome;
