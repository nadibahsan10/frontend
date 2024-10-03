import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Grid,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Importing Accept icon
import CancelIcon from "@mui/icons-material/Cancel"; // Importing Decline icon
import EmailIcon from "@mui/icons-material/Email";
import customImage from "../Image/250929134_4408229885970439_9204173520367789220_n.jpg";
import PendingActionsIcon from "@mui/icons-material/PendingActions"; // Importing PendingActions icon

const requestedAlumniData = [
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

const RequestedAlumni = () => {
  const handleAcceptRequest = (id) => {
    console.log(`Accepted request for alumni with ID: ${id}`);
    // Add your logic to accept the request
  };

  const handleDeclineRequest = (id) => {
    console.log(`Declined request for alumni with ID: ${id}`);
    // Add your logic to decline the request
  };

  const handleEmail = (id) => {
    console.log(`Emailing alumni with ID: ${id}`);
    // Add your logic to send an email
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
        <PendingActionsIcon sx={{ marginRight: 1 }} />
        {requestedAlumniData.length} Pending
      </Typography>

      <Container
        sx={{
          padding: 2,
          minHeight: "90vh",
          overflowY: "auto",
          border: "2px solid #00000030",
          borderRadius: "8px",
        }}
      >
        <Grid container spacing={2}>
          {requestedAlumniData.map((alumni) => (
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
                      onClick={() => handleEmail(alumni.id)}
                      aria-label="email"
                    >
                      <EmailIcon />
                    </IconButton>
                    <Button
                      variant="outlined"
                      color="success"
                      startIcon={<CheckCircleIcon />}
                      onClick={() => handleAcceptRequest(alumni.id)}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<CancelIcon />}
                      onClick={() => handleDeclineRequest(alumni.id)}
                    >
                      Decline
                    </Button>
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

export default RequestedAlumni;
