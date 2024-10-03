import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Grid,
} from "@mui/material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MessageIcon from "@mui/icons-material/Message";
import customImage from "../Image/250929134_4408229885970439_9204173520367789220_n.jpg";

const alumniData = [
  {
    id: 1,
    name: "MD Nadib Ahsan",
    company: "Google LLC",
    batch: "2021",
    profile_picture: customImage,
  },
  {
    id: 2,
    name: "S.M. Shahriar Rahman Maruph",
    company: "Microsoft",
    batch: "2020",
    profile_picture: customImage,
  },
  {
    id: 3,
    name: "Mohiuddin Sadik",
    company: "Adobe",
    batch: "2019",
    profile_picture: customImage,
  },
  // Add more demo data as needed
];

const MyList = () => {
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  const handleClick = (id) => {
    setSelectedAlumni(id === selectedAlumni ? null : id); // Toggle selection
  };

  const handleViewProfile = (id) => {
    console.log(`Viewing profile for alumni with ID: ${id}`);
    // Add your logic to view the profile
  };

  const handleMessage = (id) => {
    console.log(`Sending message to alumni with ID: ${id}`);
    // Add your logic to send a message
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          padding: "2px 15px",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#780000",
          color: "White",
          marginBottom: 2,
        }}
      >
        <ConnectWithoutContactIcon sx={{ marginRight: 1 }} />
        {alumniData.length} Connected
      </Typography>

      <Container
      sx={{
        padding: 2,
        minHeight: "90vh",
        overflowY: "auto",
        border: "2px solid #00000030",
        borderRadius: "8px",
      }}>
        <Grid container spacing={2}>
          {alumniData.map((alumni) => (
            <Grid item key={alumni.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.3s",
                  borderRadius: "15px",
                  boxShadow: 3,
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <Avatar
                  src={alumni.profile_picture}
                  alt={alumni.name}
                  sx={{
                    margin: "16px auto",
                    width: "100px",
                    height: "100px",
                  }}
                />

                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "150px",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", marginBottom: 1 }}
                    >
                      {alumni.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {alumni.batch}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {alumni.company}
                    </Typography>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <IconButton
                      onClick={() => handleViewProfile(alumni.id)}
                      aria-label="view profile"
                    >
                      <VisibilityIcon />
                    </IconButton>

                    <IconButton
                      onClick={() => handleMessage(alumni.id)}
                      aria-label="message"
                    >
                      <MessageIcon />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MyList;
