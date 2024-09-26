import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";

const BasicInformation = ({
  name,
  phone,
  location,
  email,
  age,
  resumeLink,
}) => {
  const handleDownloadResume = () => {
    window.open(resumeLink, "_blank");
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <Box
      backgroundColor="#EBEBEB"
      minHeight="300px"
      borderRadius={1}
      padding={2}
      sx={{ padding: 3, width: "100%", margin: "auto" }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Basic Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Name:</strong> {name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Phone:</strong> {phone}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Location:</strong> {location}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Email:</strong> {email}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Age:</strong> {age}
          </Typography>
        </Grid>
      </Grid>

      <Box mt={4} display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          color="primary"
          onClick={handleDownloadResume}
        >
          Download Resume
        </Button>
        <Button variant="outlined" onClick={handleSendEmail}>
          Send Email
        </Button>
      </Box>
    </Box>
  );
};

export default BasicInformation;
