import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundImage: "url('../public/design/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "20px",
        textAlign: "center",
        position: "relative",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
        marginTop: '60px'
      }}
    >
      <Typography variant="h1" component="h1" sx={{ mb: 2, color: 'white' }}>
        UIU+
      </Typography>
      <Typography variant="body2" sx={{ mt: 2, color: 'white' }}>
        &copy; 2024 All rights reserved | This is Our Software Lab Project | Team 'Ma er Dua'
      </Typography>
    </Box>
  );
}

export default Footer;
