import React, { useReducer, useState, useEffect, act } from "react";
import {
  Box,
  TextField,
  Button,
  IconButton,
  Typography,
  Avatar,
  Backdrop,
  CircularProgress,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useParams, useNavigate, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      if (action.value == "") {
        return {
          ...state,
          [action.name]: action.value,
          isValid: { ...state.isValid, [action.name]: false },
        };
      }
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case "SETVALUE": {
      return {
        title: action.title,
        description: action.description, // Fixed typo from "desription" to "description"
        images: action.images,
        deletedImages: [],
        isValid: action.isValid,
      };
    }
    case "DISCARD": {
      const { index } = action;
      const newArray = state.images.filter((item, i) => i !== index);
      return {
        ...state,
        images: newArray,
      };
    }
    default: {
      return state;
    }
  }
};

const initialValue = {
  title: " ",
  description: " ",
  images: [],
  deletedImgaes: [],
  isValid: {
    title: true,
    description: true,
  },
};

const Edit = () => {
  const navigate = useNavigate();
  const discardImage = (index) => {
    dispatch({ type: "DISCARD", index: index });
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialValue);
  const { postId } = useParams();
  const handleChange = (event) => {
    const { name, value } = event.target;

    dispatch({ type: "CHANGE", name: name, value: value });
  };
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        const response = await axios.get(
          `http://localhost:3000/feed/edit/${postId}`,
          {
            headers: {
              Authorization: "Baerer " + token,
            },
          }
        );
        let post = response.data.post;

        dispatch({
          type: "SETVALUE",
          title: post.title,
          description: post.content,
          images: JSON.parse(post.image_url),
          isValid: {
            title: true,
            description: true,
          },
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleBack = () => {
    navigate(-1);
  };
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const imgs = JSON.stringify(state.images);
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.put(
        `http://localhost:3000/feed/update/${postId}`,
        {
          title: state.title,
          content: state.description,
          image_url: imgs,
        },
        {
          headers: {
            Authorization: "Baerer " + token,
          },
        }
      );
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <>
      {success && (
        <Alert
          variant="filled"
          severity="success"
          onClose={() => {
            setSuccess(false);
          }}
        >
          Your post has been successfully updated.
        </Alert>
      )}
      {error && (
        <Alert
          variant="filled"
          severity="error"
          onClose={() => {
            setSuccess(false);
          }}
        >
          {error}
        </Alert>
      )}

      <Backdrop sx={{ zIndex: 10 }} open={loading}>
        <CircularProgress thickness={5} size={100} />
      </Backdrop>
      <Box
        padding={5}
        onSubmit={handleSubmit}
        component="form"
        position="relative"
        sx={{
          backgroundColor: "#FFFFFF",
          minHeight: 400,

          borderRadius: "4px",
        }}
      >
        <IconButton
          size="large"
          onClick={handleBack}
          sx={{ position: "absolute", top: 10, left: 10 }}
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <Typography variant="h4" textAlign="center">
          Update Your Post Here
        </Typography>
        <br />
        <TextField
          error={state.isValid.title ? false : true}
          variant="outlined"
          helperText={state.isValid.title ? "" : "Please Enter a Title"}
          label="Title"
          name="title"
          onChange={handleChange}
          value={state.title}
          fullWidth
          sx={{ marginBottom: 2 }}
        />

        <TextField
          error={state.isValid.description ? false : true}
          helperText={
            state.isValid.description ? "" : "Please Enter a Description"
          }
          variant="outlined"
          name="description"
          onChange={handleChange}
          label="Description"
          value={state.description}
          multiline
          minRows={4}
          fullWidth
        />
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="start"
          gap={2}
          flexWrap="wrap"
          marginTop={2}
        >
          {state.images &&
            state.images.map((item, index) => {
              console.log(item, index);
              return (
                <Box
                  key={index}
                  sx={{
                    height: "100px",
                    width: "auto",
                    backgroundColor: "black",
                    position: "relative",
                  }}
                >
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 0.1,
                      right: 0.1,
                      zIndex: 3,
                      color: "white !important",
                    }}
                    onClick={() => {
                      discardImage(index);
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Avatar
                    sx={{ height: "100px", width: "auto" }}
                    src={`http://localhost:3000/${item}`}
                    variant="rounded"
                    alt={item}
                  ></Avatar>
                </Box>
              );
            })}
        </Box>

        <Box justifyContent="center" display="flex" gap={10} marginTop={5}>
          <Button variant="contained" type="submit">
            Update
          </Button>
          {success && (
            <Button variant="contained" onClick={handleBack}>
              Go to Feed
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Edit;
