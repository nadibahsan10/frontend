import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Box, Button, Typography, ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const Reactions = (props) => {
  return (
    <Box display="flex" marginTop={2} marginBottom={2} gap={2}>
      <Button
        size="large"
        startIcon={<ThumbUpOffAltIcon sx={{ transform: "scale(1.5)" }} />}
      >
        2
      </Button>
      <Button
        size="large"
        startIcon={<ThumbDownOffAltIcon sx={{ transform: "scale(1.5)" }} />}
      >
        2
      </Button>
      {props.comment && (
        <Link to="comments/:postId">
          <Button
            size="large"
            startIcon={
              <ChatBubbleOutlineIcon sx={{ transform: "scale(1.5)" }} />
            }
          >
            2
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
