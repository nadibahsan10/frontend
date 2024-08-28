import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./Footer.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  background: "none",
  boxShadow: "none",
}));

function Footer() {
  return (
    <Box>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: "5%",
          position: "relative",
          overflow: "hidden",
          padding: "100px",

          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('./design/UIU.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(30%)",
            zIndex: -1,
            boxShadow: "inset 0 0 10px rgba(0.4,0,0,0.4)",
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>
              <div className="first">
                <h1>UIU+</h1>
                <p>
                  Welcome to UIU+, the platform of United International
                  University (UIU) that connects the vibrant community of alumni
                  and current students. UIU+ is more than just a digital space;
                  it's a dynamic bridge that fosters communication,
                  collaboration, and support among the UIU family.
                </p>
                <h4>
                  <a href="#">Our Team</a>
                </h4>
              </div>
            </Item>
          </Grid>
          <Grid item xs={3} sx={{}}>
            <Item>
              <div className="second">
                <ul>
                  <h4>Contact</h4>
                  <li>Address: 100 feet,Natunbazar, Vatara, Dhaka 1212.</li>
                  <li>Phone: +880 1716-301951</li>
                  <li>
                    Email: <a href="mailto:info@uiu.com">info@uiu.com</a>
                  </li>
                  <li>Skype: you_online</li>
                </ul>
              </div>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <div className="third">
                <h4>Links</h4>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#students-feed">Student's Feed</a>
                  </li>
                  <li>
                    <a href="#market-place">Market Place</a>
                  </li>
                  <li>
                    <a href="#alumni">Alumni</a>
                  </li>
                </ul>
              </div>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <div className="fourth">
                <h4>Links</h4>
                <ul>
                  <li>
                    <a href="#how-it-works">How it works</a>
                  </li>
                  <li>
                    <a href="#plan-pricing">Plan & Pricing</a>
                  </li>
                  <li>
                    <a href="#affiliates">Affiliates</a>
                  </li>
                  <li>
                    <a href="#terms">Terms</a>
                  </li>
                </ul>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Grid xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0D7C66 !important",
            padding: "10px",
            color: "white !important",
          }}
        >
          <p>
            Copyright © 2024 Team Mayer Doa.Ak, Natunbazar,Vatara,Dhaka.All
            rights reserved.{" "}
          </p>
        </Box>

      </Grid>
    </Box>
  );
}

export default Footer;
