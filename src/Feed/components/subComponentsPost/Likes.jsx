import React, { useEffect, useState, useContext } from "react";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";

const Likes = ({ postId }) => {
  const [likes, setLikes] = useState(null);
  const [disLikes, setDisLikes] = useState(null);
  const [userReaction, setUserReaction] = useState(null);
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));

        const response = await axios.get(
          `http://localhost:3000/feed/getlikes/${postId}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        const userRes = response.data.userReaction;

        setLikes(response.data.likes);
        setDisLikes(response.data.disLikes);

        if (userRes === "like") {
          setUserReaction("like");
        } else if (userRes === "dislike") {
          setUserReaction("dislike");
        } else {
          setUserReaction(null);
        }
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchLikes();
  }, []);

  const handleDislikes = async () => {
    let value = "dislike";
    if (userReaction === "dislike") {
      setDisLikes(disLikes - 1);
      value = "null";
      setUserReaction("null");
    } else if (userReaction === "like") {
      setDisLikes(disLikes + 1);
      setLikes(likes - 1);
      setUserReaction("dislike");
    } else {
      setUserReaction("dislike");
      setDisLikes(disLikes + 1);
    }

    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.post(
        `http://localhost:3000/feed/like`,
        {
          postId: postId,
          isLiked: value,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const handleLikes = async () => {
    let value = "like";
    if (userReaction === "like") {
      setLikes(likes - 1);
      value = "null";
      setUserReaction("null");
    } else if (userReaction === "dislike") {
      setLikes(likes + 1);
      setDisLikes(disLikes - 1);
      setUserReaction("like");
    } else {
      setLikes(likes + 1);
      setUserReaction("like");
    }
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.post(
        `http://localhost:3000/feed/like`,
        {
          postId: postId,
          isLiked: value,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <Button
        onClick={handleLikes}
        startIcon={<FavoriteBorderIcon />}
        variant={userReaction == "like" ? "contained" : "outlined"}
      >
        {likes} Likes
      </Button>
      <Button
        onClick={handleDislikes}
        startIcon={<FavoriteBorderIcon />}
        variant={userReaction === "dislike" ? "contained" : "outlined"}
      >
        {disLikes} Dislikes
      </Button>
    </>
  );
};

export default Likes;
