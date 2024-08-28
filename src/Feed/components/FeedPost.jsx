import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useReducer,
} from "react";
import {
  Box,
  TextField,
  Button,
  Avatar,
  IconButton,
  Badge,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";

import { AuthContext } from "../../Auth/AuthContext";
import ErrorDialog from "../../Shared/ErrorDialog";
import "./FeedPost.css";

const FeedPost = ({ posts, setPosts }) => {
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const closeSuccess = () => {
    setSuccess(false);
  };

  const closeError = () => {
    setError(null);
  };

  const imageRef = useRef([]);
  const [images, setImages] = useState([]);
  const initialState = {
    title: "",
    description: "",
    files: null,
    errors: {
      title: false,
      description: false,
    },
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_FIELD_VALUE": {
        return {
          ...state,
          [action.name]: action.value,
          errors: {
            ...state.errors,
            [action.name]: action.value == "" ? true : false,
          },
        };
      }
      case "SET_IMAGE": {
        return {
          ...state,
          files: action.value,
        };
      }
      case "DISCARD_IMAGE": {
        return {
          ...state,
          files: action.value,
        };
      }
      case "SUBMIT": {
        const newErrors = {
          title: state.title.trim() === "",
          description: state.description.trim() === "",
        };

        return {
          ...state,
          errors: newErrors,
        };
      }
      case "INITIAL": {
        return {
          title: "",
          description: "",
          files: null,
          errors: {
            title: false,
            description: false,
          },
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "SET_FIELD_VALUE", name: name, value: value });
  };

  const selectImageHandler = () => {
    imageRef.current.click();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch({ type: "SUBMIT" });
    if (state.errors.title === true || state.errors.description === true) {
      return;
    }
    setIsLoading(true);
    const form = new FormData();
    form.append("title", state.title);
    form.append("description", state.description);
    if (state.files !== null) {
      let imageArray = Array.from(state.files);
      imageArray.forEach((item, index) => {
        form.append("files", item);
      });
    }

    console.log(state);
    try {
      const token = "Bearer " + JSON.parse(localStorage.getItem("token"));
      const response = await axios.post(
        "http://localhost:3000/feed/post",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );
      console.log(response.data);
      setPosts(null);
      dispatch({ type: "INITIAL" });
      setIsLoading(false);
      setSuccess(true);
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data.message);
      console.log(err.response);
    }
  };
  const handleImageUplaod = (event) => {
    const { files } = event.target;
    console.log(event.target.files);
    setImages(Object.values(files));
    dispatch({ type: "SET_IMAGE", value: files });
  };
  const discardImage = (indexToRemove) => {
    setImages((prev) => {
      return prev.filter((_, index) => index !== indexToRemove);
    });

    const dataTransfer = new DataTransfer();
    const pic = Array.from(state.files).filter((_, index) => {
      return index !== indexToRemove;
    });

    pic.forEach((file) => {
      dataTransfer.items.add(file);
    });
    console.log(dataTransfer.files);

    dispatch({ type: "DISCARD_IMAGE", value: dataTransfer.files });
  };
  return (
    <>
      {success && (
        <Alert severity="success" onClose={closeSuccess}>
          Your post has been successfully shared with your network!
        </Alert>
      )}
      {error && (
        <Alert severity="error" onClose={closeError}>
          {error}
        </Alert>
      )}
      {/* <ErrorDialog
        open={error.isError}
        title="There's an error to post."
        description={error.value?.response.data.message}
        handleClose={closeError}
      /> */}

      <Box
        padding={1.5}
        sx={{
          backgroundColor: "#FFFFFF",

          borderRadius: "4px",
        }}
      >
        <Grid
          container
          spacing={1}
          component="form"
          onSubmit={handleSubmit}
          method="POST"
          encType="multipart/form-data"
        >
          <Grid item xs={1}>
            <Avatar src={`http://localhost:3000/${auth.profilePicture}`} />
          </Grid>
          <Grid item xs={10}>
            <TextField
              name="title"
              value={state.title}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              label="Question Title"
              sx={{ marginBottom: "15px" }}
              error={state.errors.title}
              helperText={
                state.errors.title
                  ? "Please write title for your question"
                  : false
              }
            />
            <TextField
              error={state.errors.description}
              helperText={
                state.errors.description
                  ? "Please write description for your question"
                  : false
              }
              name="description"
              value={state.description}
              fullWidth
              onChange={handleChange}
              variant="outlined"
              label="Question Description"
              multiline
              minRows={4}
            />
            <Box sx={{ display: "flex", marginTop: "15px", width: "100%" }}>
              {images &&
                images.map((item, index) => {
                  return (
                    <Badge
                      key={index}
                      sx={{ marginRight: "10px" }}
                      overlap="circular"
                      badgeContent={
                        <IconButton
                          color="white"
                          onClick={() => {
                            discardImage(index);
                          }}
                        >
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      }
                    >
                      <Avatar
                        src={URL.createObjectURL(item)}
                        sx={{ height: "50px", width: "50px" }}
                        variant="rounded"
                      />
                    </Badge>
                  );
                })}

              <Button
                color="primary"
                variant="outlined"
                sx={{ marginRight: "10px" }}
                onClick={selectImageHandler}
              >
                <AddPhotoAlternateIcon fontSize="large" />
              </Button>
              <input
                type="file"
                ref={imageRef}
                name="images"
                style={{ display: "none" }}
                multiple
                onChange={handleImageUplaod}
              />

              {isLoading ? (
                <CircularProgress sx={{ marginLeft: "auto" }} color="primary" />
              ) : (
                <Button
                  type="submit"
                  sx={{ marginLeft: "auto" }}
                  color="primary"
                  variant="contained"
                >
                  Post
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FeedPost;
