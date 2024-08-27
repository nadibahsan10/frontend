import React, { useEffect, useState } from "react";
import { Box, Skeleton } from "@mui/material";

import axios from "axios";
import Post from "./Post";
import "./PostWall.css";
const PostWall = ({ posts, setPosts }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = "Baerer " + JSON.parse(localStorage.getItem("token"));
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/feed/getposts",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        const resultArray = response.data.posts;
        setPosts(resultArray);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.response.data.message);
      }
    };
    fetchData();
  }, [posts]);
  return (
    <Box marginTop={2}>
      {isLoading && (
        <>
          <Box
            sx={{
              marginBottom: "15px",
              backgroundColor: "#FFFFFF",
              minHeight: "100px",
              borderRadius: "4px",
              position: "relative",
              padding: "10px",
            }}
          >
            <Box display="flex">
              <Skeleton variant="circular" height={50} width={50}></Skeleton>
              <Box marginLeft={3}>
                <Skeleton
                  variant="rectangular"
                  width={200}
                  height={20}
                ></Skeleton>
                <br />
                <Skeleton
                  variant="rectangular"
                  width={250}
                  height={10}
                ></Skeleton>
              </Box>
            </Box>
            <Box marginLeft={9.2} marginTop={2} marginBottom={5}>
              <Skeleton
                variant="rectangular"
                width={600}
                height={40}
              ></Skeleton>
              <Skeleton
                variant="rectangular"
                sx={{ marginTop: 2 }}
                width={600}
                height={300}
              ></Skeleton>
            </Box>
          </Box>
          <Box
            sx={{
              marginBottom: "15px",
              backgroundColor: "#FFFFFF",
              minHeight: "100px",
              borderRadius: "4px",
              position: "relative",
              padding: "10px",
            }}
          >
            <Box display="flex">
              <Skeleton variant="circular" height={50} width={50}></Skeleton>
              <Box marginLeft={3}>
                <Skeleton
                  variant="rectangular"
                  width={200}
                  height={20}
                ></Skeleton>
                <br />
                <Skeleton
                  variant="rectangular"
                  width={250}
                  height={10}
                ></Skeleton>
              </Box>
            </Box>
            <Box marginLeft={9.2} marginTop={2} marginBottom={5}>
              <Skeleton
                variant="rectangular"
                width={600}
                height={40}
              ></Skeleton>
              <Skeleton
                variant="rectangular"
                sx={{ marginTop: 2 }}
                width={600}
                height={300}
              ></Skeleton>
            </Box>
          </Box>
        </>
      )}

      {posts?.map((item) => {
        return (
          <Post
            key={item.id}
            id={item.id}
            profilePicture={item.profile_picture}
            name={item.first_name + " " + item.last_name}
            date={item.created_at}
            title={item.title}
            content={item.content}
            imageUrl={item.image_url}
          />
        );
      })}
    </Box>
  );
};

export default PostWall;
