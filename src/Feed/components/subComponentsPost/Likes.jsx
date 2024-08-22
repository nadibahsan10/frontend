import React, { useEffect, useState, useContext } from "react";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";

const Likes = ({ postId }) => {
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);
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

        setLikes(response.data.likes);
        setDisLikes(response.data.disLikes);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchLikes();
  }, [likes, disLikes]);

  const handleLikes = async (isLiked) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.post(
        `http://localhost:3000/feed/like`,
        {
          postId: postId,
          isLiked: isLiked,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
    }

    console.log(response);
  };

  return (
    <>
      <Button
        onClick={() => {
          handleLikes(true);
        }}
        startIcon={<FavoriteBorderIcon />}
        variant={userReaction === true ? "contained" : "outlined"}
      >
        {likes} Likes
      </Button>
      <Button
        startIcon={<FavoriteBorderIcon />}
        variant={userReaction === false ? "contained" : "outlined"}
      >
        {disLikes} Dislikes
      </Button>
    </>
  );
};

export default Likes;
