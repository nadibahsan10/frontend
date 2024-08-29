import React, { useState } from "react";
import { Grid, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import FeedPost from "../components/FeedPost";
import UserInfo from "../components/UserInfo";
import Top from "../components/Top";
import PostWall from "../components/PostWall";
import DeletePost from "../components/Edit";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [change, setChange] = useState(0);
  return (
    <div
      style={{
        minHeight: 600,
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
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FeedPost change={change} setChange={setChange} />

                    <PostWall
                      posts={posts}
                      change={change}
                      setChange={setChange}
                      setPosts={setPosts}
                    />
                  </>
                }
              />
              <Route
                path="/edit/:postId"
                element={<DeletePost posts={posts} setPosts={setPosts} />}
              />
            </Routes>
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
