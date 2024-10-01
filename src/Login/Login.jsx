import React, { useRef, useState, useContext } from "react";
import { Grid, Button, TextField, Box, Paper, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useInput } from "../CustomHooks/useInput";
import { useMutation } from "@tanstack/react-query";

import Loading from "../Shared/Loading";
import Popup from "../Shared/Popup";

import { AuthContext } from "../Auth/AuthContext";
const Login = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const { state, handleChange } = useInput({
    email: { value: "", isValid: true },
    password: { value: "", isValid: true },
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email: state.email.value,
        password: state.password.value,
      });
      return response.data.token;
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    mutation.mutate(undefined, {
      onSuccess: (data) => {
        console.log("Token:", data);
        localStorage.setItem("token", JSON.stringify(data));
        const user = JSON.parse(atob(data.split(".")[1]));
        auth.login(user);
        navigate("/");
      },
    });
  };

  return (
    <>
      {mutation.isError && (
        <Popup
          open={mutation.isError}
          onClose={() => mutation.reset()} // Reset mutation state on close
          errorMessage={mutation.error.response.data.message}
          status={mutation.error.response.status}
        />
      )}

      <Loading open={mutation.isPending} message="Loading" />
      <Box
        position="absolute"
        sx={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <Paper
          elevation={3}
          square
          sx={{
            height: {
              xs: "auto", // Auto height for extra small screens
              sm: "400px", // 400px height for small screens
              md: "600px",
              lg: "700px", // 500px height for medium and larger screens
            },
            width: {
              xs: "100%", // Full width for extra small screens
              sm: "600px", // 600px width for small screens
              md: "900px",
              lg: "1000px", // 800px width for medium and larger screens
            },
            // Center the Paper component
          }}
        >
          <Grid
            container
            sx={{
              height: "100%",
              width: "100%",
            }}
          >
            <Grid
              item
              xs={12} // Full width on extra small screens
              sm={6} // 8/12 width on small screens (66.67%)
              md={6} // 7/12 width on medium screens (58.33%)
              lg={6} // 6/12 width on large screens (50%)
              sx={{
                padding: { xs: 2, sm: 4 }, // Responsive padding
                backgroundColor: "primary.main",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center", // Center the content vertically
                  alignItems: "center", // Center the content horizontally
                  textAlign: "center",
                  height: "100%",
                  gap: 2, // Center text
                }}
              >
                <Typography variant="h2" fontWeight={500} color="white.main">
                  Hello, There!
                </Typography>
                <Typography variant="body1" color="white.main">
                  Enter your details and start your journey with <br />
                  us
                </Typography>
                <Button
                  component={Link}
                  variant="contained"
                  color="white"
                  size="large"
                  sx={{ width: "100%" }}
                >
                  Get Started
                </Button>

                <br />
              </Box>
            </Grid>
            <Grid
              component="form"
              onSubmit={handleSubmit}
              item
              xs={12} // Full width on extra small screens
              sm={6} // 4/12 width on small screens (33.33%)
              md={6} // 5/12 width on medium screens (41.67%)
              lg={6} // 6/12 width on large screens (50%)
              sx={{
                padding: { xs: 2, sm: 4 }, // Responsive padding
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center", // Center the content vertically
                  alignItems: "center", // Center the content horizontally
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Typography variant="h4" fontWeight={500}>
                  LOGIN
                </Typography>
                <TextField
                  required
                  onChange={handleChange}
                  value={state.email.value}
                  error={!state.email.isValid}
                  helperText={
                    !state.email.isValid && "Please Enter a Valid Email Address"
                  }
                  name="email"
                  type="email"
                  sx={{ width: "100%" }}
                  label="Email"
                  variant="outlined"
                />
                <br />
                <TextField
                  required
                  onChange={handleChange}
                  value={state.password.value}
                  error={!state.password.isValid}
                  helperText={
                    !state.password.isValid && "Password Cannot Be empty"
                  }
                  name="password"
                  type="password"
                  sx={{ width: "100%" }}
                  label="Password"
                  variant="outlined"
                />
                <br />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "100%" }}
                  size="large"
                  color="primary"
                >
                  LOGIN
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default Login;
