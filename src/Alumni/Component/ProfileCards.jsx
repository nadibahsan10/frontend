import React from 'react'
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Card,
    CardContent,
    CardMedia,
  } from "@mui/material";
const alumniData = [
    {
      id: 1,
      name: "MD Nadib Ahsan",
      company: "Google LLC",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "S.M. Shahriar Rahman Maruph",
      company: "Microsoft",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Mohiuddin Sadik",
      company: "Adobe",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "MD Nadib Ahsan",
      company: "Google LLC",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      name: "S.M. Shahriar Rahman Maruph",
      company: "Microsoft",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      name: "Mohiuddin Sadik",
      company: "Adobe",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 1,
      name: "MD Nadib Ahsan",
      company: "Google LLC",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "S.M. Shahriar Rahman Maruph",
      company: "Microsoft",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Mohiuddin Sadik",
      company: "Adobe",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "MD Nadib Ahsan",
      company: "Google LLC",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      name: "S.M. Shahriar Rahman Maruph",
      company: "Microsoft",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      name: "Mohiuddin Sadik",
      company: "Adobe",
      image: "https://via.placeholder.com/100",
    },
  ];
  import CustomImage from "../Image/250929134_4408229885970439_9204173520367789220_n.jpg"
  
function ProfileCards() {
  return (<>
    <TextField
    id="outlined-basic"
    label="Search Alumni here ..."
    variant="outlined"
    fullWidth
  />
  <Typography
    variant="h6"
    sx={{
      marginTop: "1%", 
      padding: "2px 15px", 
      borderRadius: "5px",
      display: "flex", //
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center", 
      backgroundColor: "#780000",
      color: "White", // Text color
      
      marginBottom: '1%'
    }}
  >
    Alumni Profiles 
  </Typography>
  <Container
    sx={{ padding: 2, maxHeight: "700px", overflowY: "auto" ,border: "2px solid #00000030",borderRadius: "8px",}}
  >
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
            <CardMedia
              component="img"
              image={CustomImage}
              alt={alumni.name}
              sx={{
                borderRadius: "50%",
                margin: "16px auto",
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "120px",
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
                  {alumni.company}
                </Typography>
              </div>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "auto" }}
              >
                Connect
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  </>
  )
}

export default ProfileCards