import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import Social from "./Social";
import PersonalInformation from "./Personal";

const About = () => {
  return (
    <Box
      sx={{
        padding: 4,
        bgcolor: "#f5f5f5",
        borderRadius: 2,
        maxWidth: "100%",
        margin: "auto",
      }}
    >
      <PersonalInformation />
      <Divider sx={{ margin: "20px 0" }} />
      <Social />
    </Box>
  );
};

export default About;
