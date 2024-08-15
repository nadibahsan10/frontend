import React, { useRef, useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import "./LoginMode.css";
import axios from "axios";

const LoginMode = (props) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/auth/login", { email, password })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error response:", error.response.data.message);
          console.error("Status code:", error.response.status);
        } else if (error.request) {
          console.error("Error request:", error.request);
        } else {
          console.error("Error message:", error.message);
        }
      });
  };

  return (
    <Grid container sx={{ height: "100%", width: "100%" }}>
      <IconButton
        aria-label="delete"
        size="large"
        sx={{ position: "absolute", top: "10px", right: "10px" }}
        onClick={props.onClose}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
      <Grid xs={6} item className="login-left">
        <h1 style={{ color: "white", fontSize: "60px", margin: 1 }}>
          Hello, There!
        </h1>
        <p style={{ fontSize: "20px", textAlign: "center", color: "white" }}>
          Enter your details and start your journey with <br />
          us
        </p>
        <br />
        <Button
          variant="contained"
          sx={{
            width: "100%",
            color: "primary.main",
            padding: "10px 0px",
            fontSize: "20px",
          }}
          color="white"
          onClick={props.changeMode}
        >
          Signup
        </Button>
      </Grid>
      <Grid
        component="form"
        onSubmit={handleSubmit}
        item
        xs={6}
        className="login-right"
      >
        <h1>LOGIN</h1>
        <TextField
          required
          onChange={handleChange}
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
          sx={{
            width: "100%",

            padding: "10px 0px",
            fontSize: "20px",
          }}
          color="primary"
        >
          LOGIN
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginMode;
