import React, { useEffect, useState, useContext } from "react";
import { Box, Typography, Avatar, Button, IconButton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import DeleteIcon from "@mui/icons-material/Delete";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import axios from "axios";
import { AuthContext } from "../../../Auth/AuthContext";

const CommentLikes = ({ element, change }) => {
  const auth = useContext(AuthContext);

  const [likes, setLikes] = useState(null);
  const [disLikes, setDisLikes] = useState(null);
  const [userReaction, setUserReaction] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));

        const response = await axios.get(
          `http://localhost:3000/feed/getcommentlikes/${element.id}`,
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
  });

  const handleCommentLike = async () => {
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
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.post(
        `http://localhost:3000/feed/commentlikes/${element.id}`,
        {
          isLiked: value,
        },
        {
          headers: {
            Authorization: "Baerer " + token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {}
  };

  const deleteComment = async () => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.delete(
        `http://localhost:3000/feed/deletecomment/${element.id}`,
        {
          headers: {
            Authorization: "Baerer " + token,
          },
        }
      );
      console.log(response.data);

      change((prev) => !prev);
    } catch (error) {
      console.log("comment Deleted", error.response.data.message);
    }
  };
  const handleCommentDisLike = async () => {
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

    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.post(
        `http://localhost:3000/feed/commentlikes/${element.id}`,
        {
          isLiked: value,
        },
        {
          headers: {
            Authorization: "Baerer " + token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {}
  };

  return (
    <Box display="flex" marginTop="20px" gap={2}>
      <Avatar src={`http://localhost:3000/${element.profile_picture}`} />
      <Box gap={2}>
        <Typography variant="body1" fontWeight="600">
          {element.first_name + " " + element.last_name}
          <span
            style={{
              fontWeight: "normal",
              color: "#999999",
              fontSize: "12px",
              marginLeft: "10px",
            }}
          >
            {new Date(element.created_at).toLocaleString()}
          </span>
        </Typography>
        <Box
          display="flex"
          gap={2}
          position="relative"
          paddingRight={2}
          sx={{ width: "630px" }}
        >
          <Box display="flex" alignItems="start" flexDirection="column">
            <Typography sx={{ margin: "10px 0px" }} variant="subtitle1">
              {element.content}
            </Typography>
            {element.image && (
              <Avatar
                src={`http://localhost:3000/${element.image}`}
                variant="rounded"
                sx={{ marginBottom: "20px", height: "200px", width: "auto" }}
              />
            )}
          </Box>
        </Box>

        <Button
          size="small"
          startIcon={<NorthWestIcon />}
          sx={{ marginRight: "10px" }}
          variant={userReaction == "like" ? "contained" : "outlined"}
          onClick={handleCommentLike}
        >
          {likes} Highlight
        </Button>
        <Button
          onClick={handleCommentDisLike}
          size="small"
          sx={{ marginRight: "10px" }}
          startIcon={<SouthEastIcon />}
          variant={userReaction === "dislike" ? "contained" : "outlined"}
        >
          {disLikes} Dim
        </Button>
        {element.userId === auth.id && (
          <Button
            size="small"
            onClick={deleteComment}
            variant="contained"
            endIcon={<DeleteIcon />}
          >
            {loading ? <CircularProgress size="small" /> : "Delete"}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default CommentLikes;
