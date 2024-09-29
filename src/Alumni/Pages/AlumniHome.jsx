import React from "react";
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
import MyList from "../Component/MyList";

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

function AlumniHome() {
  return (
    <>
      <Box
        sx={{
          width: "95%",
          margin: "0 auto",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center", padding: "30px" }}>
          Welcome to UIU Alumni Portal
        </Typography>
        <Grid container spacing={2} sx={{ }}>
          <Grid item xs={3} sx={{ padding: 4 }}>
            <MyList />
          </Grid>

          {/*main body*/}

          <Grid item xs={7} sx={{  padding: 2 }}>
            <TextField
              id="outlined-basic"
              label="Search Alumni here ..."
              variant="outlined"
              fullWidth
            />
            <Typography
              variant="h6"
              sx={{
                backgroundColor: "darkred",
                marginTop: "2%",
                padding: "1px 25px",
                borderRadius: "8px",
                color: "white !important",
              }}
            >
              Profiles
            </Typography>
            <Container sx={{ padding: 2 ,maxHeight: '700px', 
            overflowY: 'auto',
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
                      <CardMedia
                        component="img"
                        image={alumni.image}
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
          </Grid>
          <Grid item xs={2} sx={{ backgroundColor: "white", padding: 2 }}>
            <Typography variant="h6">Additional Content</Typography>
            <Typography>
              This section can feature upcoming events or contact information.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AlumniHome;
