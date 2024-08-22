import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Post from "./Post";
import "./PostWall.css";
const PostWall = () => {
  const [posts, setPosts] = useState([]);
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
      } catch (err) {
        console.log(err.response.data.message);
      }
    };
    fetchData();
  }, []);
  return (
    <Box marginTop={2}>
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
