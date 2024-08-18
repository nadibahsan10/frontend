import React from "react";
import { Grid, Container } from "@mui/material";

import FeedPost from "../components/FeedPost";
import UserInfo from "../components/UserInfo";
import Top from "../components/Top";
import PostWall from "../components/PostWall";

const Feed = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#EBEBEB",
        paddingTop: "10px",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <UserInfo />
            <br />
            <Top />
          </Grid>
          <Grid item xs={6}>
            <FeedPost />
            <PostWall />
          </Grid>
          <Grid item xs={3}>
            <Top />
            <br />
            <Top />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Feed;