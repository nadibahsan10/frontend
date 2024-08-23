import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./aboutUs.css";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function About() {
  return (
    <Container maxWidth>
        <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#343A40",
                }}
              >
                WAY TO UIU+
              </Typography>
      <Box sx={{ flexGrow: 1, marginTop: "%" ,borderRadius: '10px'}}>
        <Grid container spacing={0}>
          <Grid item xs={6} className="aboutusF">
            <img src="./design/UIU.jpg" alt="" />
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: "#2B2D42",
                padding: "15%",
              }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "white !important",
                }}
              >
                Our Story
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  color: "#EDF2F190",
                }}
              >
                Welcome to UIU+, the platform of United International University (UIU) that connects the vibrant community of alumni and current students. UIU+ is more than just a digital space; it's a dynamic bridge that fosters communication, collaboration, and support among the UIU family.
              </Typography>
              <br />
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  color: "#8D99AE",
                }}
              >
                At UIU+, we believe in the power of community. Our platform is built to empower you, providing the tools and resources you need to succeed, both during your time at UIU and beyond. Join us today and be part of a supportive network that continues to grow and thrive. Together, we are stronger. Together, we are UIU+.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
