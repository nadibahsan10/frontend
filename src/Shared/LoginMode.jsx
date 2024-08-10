import React from "react";
import { Grid } from "@mui/material";
import "./LoginMode.css";

const LoginMode = () => {
  return (
    <Grid container sx={{ height: "100%", width: "100%" }}>
      <Grid xs={6} item className="login-left">
        <h1>Hello</h1>
      </Grid>
      <Grid item xs={6} className="login-right">
        <h1>Wow..this is nice</h1>
      </Grid>
    </Grid>
  );
};

export default LoginMode;
