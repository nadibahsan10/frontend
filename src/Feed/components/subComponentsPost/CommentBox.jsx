import React, { useRef, useState } from "react";
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
import PhotoIcon from "@mui/icons-material/Photo";
import axios from "axios";

const CommentBox = ({ show, handleClose, postId }) => {
  const refVariable = useRef([]);
  const [formData, setFormData] = useState({
    content: "",
    imageFile: null,
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => {
      return { ...prev, content: value };
    });
  };
  const imageUpload = () => {
    refVariable.current.click();
  };
  const handleImage = (event) => {
    const { files } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        imageFile: files[0],
      };
    });
  };
  const discardImage = () => {
    setFormData((prev) => {
      return { ...prev, imageFile: null };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = "Baerer " + JSON.parse(localStorage.getItem("token"));
    const Data = new FormData();
    Data.append("content", formData.content);
    if (formData.imageFile) {
      Data.append("image", formData.imageFile);
    }
    try {
      const response = await axios.post(
        `http://localhost:3000/feed/comment/${postId}`,
        Data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
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
        <Box
          component="form"
          method="POST"
          display="flex"
          gap={2}
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <Avatar src="./profileImage.webp" />

          <input
            ref={refVariable}
            type="file"
            name="imageFile"
            style={{ display: "none" }}
            onChange={handleImage}
          />
          <TextField
            value={formData.content}
            onChange={handleInput}
            fullWidth
            name="content"
            label="Give an Answer"
            multiline
            variant="standard"
          />

          <IconButton
            variant="contained"
            onClick={imageUpload}
            sx={{ height: "50px" }}
          >
            <PhotoIcon />
          </IconButton>
          <Button
            variant="contained"
            type="submit"
            disabled={formData.content !== "" ? false : true}
            sx={{ height: "50px" }}
          >
            Answer
          </Button>
        </Box>

        {formData.imageFile && (
          <>
            <br />
            <Box
              sx={{
                width: 100,
                height: 100,
                marginLeft: "60px",
                position: "relative",
              }}
            >
              <Avatar
                sx={{ height: "100%", width: "100%" }}
                variant="rounded"
                src={URL.createObjectURL(formData.imageFile)}
              ></Avatar>

              <IconButton
                sx={{
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  color: "white !important",
                }}
                onClick={discardImage}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </>
        )}

        <br />
        <br />
        <Box display="flex" marginTop="20px" gap={2}>
          <Avatar src="./profileImage.webp" />
          <Box gap={2}>
            <Typography variant="body1" fontWeight="600">
              Shahriar Rahman Maruph
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
