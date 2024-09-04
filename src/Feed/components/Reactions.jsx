import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Box, Button, Typography, ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Reactions = (props) => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ["getLikes", props.id],
    queryFn: async () => {
      return await props.getLikes(props.id);
    },
  });

  return (
    <Box display="flex" marginTop={2} marginBottom={2} gap={2}>
      <Button
        variant={data?.userReaction === "like" ? "contained" : "text"}
        color="primary"
        size="large"
        startIcon={<ThumbUpOffAltIcon sx={{ transform: "scale(1.5)" }} />}
      >
        {data?.likes}
      </Button>
      <Button
        variant={data?.userReaction === "dislike" ? "contained" : "text"}
        size="large"
        startIcon={<ThumbDownOffAltIcon sx={{ transform: "scale(1.5)" }} />}
      >
        {data?.disLikes}
      </Button>
      {props.comment && (
        <Link to={`comments/${props.dataToPass.id}`} state={props.dataToPass}>
          <Button
            size="large"
            startIcon={
              <ChatBubbleOutlineIcon sx={{ transform: "scale(1.5)" }} />
            }
          >
            {data?.comments}
          </Button>
        </Link>
      )}
      {props.delete && (
        <Button
          size="large"
          startIcon={<DeleteIcon sx={{ transform: "scale(1.5)" }} />}
        >
          Delete
        </Button>
      )}
    </Box>
  );
};

export default Reactions;
