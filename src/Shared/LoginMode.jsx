import React, { useRef, useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import "./LoginMode.css";

const LoginMode = (props) => {
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
      <Grid item xs={6} className="login-right">
        <h1>LOGIN</h1>
        <TextField
          type="email"
          sx={{ width: "100%" }}
          label="Email"
          variant="outlined"
        />
        <br />
        <TextField
          type="password"
          sx={{ width: "100%" }}
          label="Password"
          variant="outlined"
        />
        <br />
        <br />
        <Button
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
