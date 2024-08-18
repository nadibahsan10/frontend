import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

import "./Top.css";

const Top = () => {
  return (
    <Box
      component="form"
      padding={1.5}
      sx={{
        backgroundColor: "#FFFFFF",

        borderRadius: "4px",
      }}
    >
      <Typography variant="h6">Top Contributer</Typography>
      <hr />
      <Box display="flex" alignItems="center" marginBottom={2}>
        <Avatar src="/profileImage.webp" />
        <Box marginLeft={1}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Mohiuddin Sadik
          </Typography>
          <Typography variant="caption">320+ votes</Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Avatar src="/profileImage.webp" />
        <Box marginLeft={1}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            MD Nadib Ahsan
          </Typography>
          <Typography variant="caption">320+ votes</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Top;
