import React from "react";
import {
  Modal,
  Box,
  Typography,
  Grid,
  Avatar,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

const CommentBox = ({ show, handleClose }) => {
  return (
    <Modal open={show} onClose={handleClose}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          height: "700px",
          width: "700px",
          backgroundColor: "#FFFFFF",
          overflow: "auto",
          borderRadius: "4px",
          padding: "20px",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <CloseIcon />
        </IconButton>
        <Box>
          <Typography variant="h6">253 Answers</Typography>
          <hr />
        </Box>
        <Box display="flex" gap={2}>
          <Avatar src="./profileImage.webp" />
          <TextField
            fullWidth
            id="standard-textarea"
            label="Give an Answer"
            multiline
            variant="standard"
          />
          <Button variant="contained" sx={{ height: "50px" }}>
            Answer
          </Button>
        </Box>
        <br />
        <br />
        <Box display="flex" marginTop="20px" gap={2}>
          <Avatar src="./profileImage.webp" />
          <Box gap={2}>
            <Typography variant="body1" fontWeight="600">
              Shahriar Rahman Maruph{"  "}
              <span
                style={{
                  fontWeight: "normal",
                  color: "#999999",
                  fontSize: "12px",
                }}
              >
                3 years ago
              </span>
            </Typography>
            <Box display="flex" gap={2} position="relative" paddingRight={2}>
              <Typography variant="subtitle1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                aspernatur sint suscipit maxime tempora accusantium voluptate,
                reiciendis possimus incidunt tempore.
              </Typography>
              <IconButton
                size="small"
                sx={{ position: "absolute", top: "0px", right: "0px" }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>

            <Button
              startIcon={<FavoriteBorderIcon />}
              sx={{ marginRight: "10px" }}
              variant="outlined"
            >
              12 Like
            </Button>
            <Button startIcon={<ThumbDownOffAltIcon />} variant="outlined">
              1 Dislike
            </Button>
          </Box>
        </Box>
        <Box display="flex" marginTop="20px" gap={2}>
          <Avatar src="./profileImage.webp" />
          <Box gap={2}>
            <Typography variant="body1" fontWeight="600">
              Shahriar Rahman Maruph{"  "}
              <span
                style={{
                  fontWeight: "normal",
                  color: "#999999",
                  fontSize: "12px",
                }}
              >
                3 years ago
              </span>
            </Typography>
            <Box display="flex" gap={2} position="relative" paddingRight={2}>
              <Typography variant="subtitle1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                aspernatur sint suscipit maxime tempora accusantium voluptate,
                reiciendis possimus incidunt tempore.
              </Typography>
              <IconButton
                size="small"
                sx={{ position: "absolute", top: "0px", right: "0px" }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>

            <Button
              startIcon={<FavoriteBorderIcon />}
              sx={{ marginRight: "10px" }}
              variant="outlined"
            >
              12 Like
            </Button>
            <Button startIcon={<ThumbDownOffAltIcon />} variant="outlined">
              1 Dislike
            </Button>
          </Box>
        </Box>
        <Box display="flex" marginTop="20px" gap={2}>
          <Avatar src="./profileImage.webp" />
          <Box gap={2}>
            <Typography variant="body1" fontWeight="600">
              Shahriar Rahman Maruph{"  "}
              <span
                style={{
                  fontWeight: "normal",
                  color: "#999999",
                  fontSize: "12px",
                }}
              >
                3 years ago
              </span>
            </Typography>
            <Box display="flex" gap={2} position="relative" paddingRight={2}>
              <Typography variant="subtitle1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                aspernatur sint suscipit maxime tempora accusantium voluptate,
                reiciendis possimus incidunt tempore.
              </Typography>
              <IconButton
                size="small"
                sx={{ position: "absolute", top: "0px", right: "0px" }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>

            <Button
              startIcon={<FavoriteBorderIcon />}
              sx={{ marginRight: "10px" }}
              variant="outlined"
            >
              12 Like
            </Button>
            <Button startIcon={<ThumbDownOffAltIcon />} variant="outlined">
              1 Dislike
            </Button>
          </Box>
        </Box>
        <Box display="flex" marginTop="20px" gap={2}>
          <Avatar src="./profileImage.webp" />
          <Box gap={2}>
            <Typography variant="body1" fontWeight="600">
              Shahriar Rahman Maruph{"  "}
              <span
                style={{
                  fontWeight: "normal",
                  color: "#999999",
                  fontSize: "12px",
                }}
              >
                3 years ago
              </span>
            </Typography>
            <Box display="flex" gap={2} position="relative" paddingRight={2}>
              <Typography variant="subtitle1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                aspernatur sint suscipit maxime tempora accusantium voluptate,
                reiciendis possimus incidunt tempore.
              </Typography>
              <IconButton
                size="small"
                sx={{ position: "absolute", top: "0px", right: "0px" }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>

            <Button
              startIcon={<FavoriteBorderIcon />}
              sx={{ marginRight: "10px" }}
              variant="outlined"
            >
              12 Like
            </Button>
            <Button startIcon={<ThumbDownOffAltIcon />} variant="outlined">
              1 Dislike
            </Button>
          </Box>
        </Box>
      </div>
    </Modal>
  );
};

export default CommentBox;
