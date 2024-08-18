import React, { useContext } from "react";
import { Box, Typography, Grid } from "@mui/material";

import "./UserInfo.css";
import { AuthContext } from "../../Auth/AuthContext";

const UserInfo = () => {
  const auth = useContext(AuthContext);

  return (
    <Box
      padding={1.5}
      sx={{
        backgroundColor: "#FFFFFF",

        borderRadius: "4px",
      }}
    >
      <Typography variant="h6">{auth.name}</Typography>
      <Typography variant="subtitle1">@nadib_ahsan</Typography>
      <hr />
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="secondary">
            POSTS
          </Typography>
          <Typography variant="h6">120</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="secondary">
            ANSWERS
          </Typography>
          <Typography variant="h6">100+</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="secondary">
            REACTIONS
          </Typography>
          <Typography variant="h6">1000+</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="secondary">
            RANK
          </Typography>
          <Typography variant="h6">A</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserInfo;
