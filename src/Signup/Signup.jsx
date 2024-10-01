import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

import Location from "./Location";
import { AuthContext } from "../Auth/AuthContext";

const Signup = () => {
  const auth = useContext(AuthContext);

  const SubmitHandler = async (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <Box
      position="absolute"
      sx={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 1200,
          width: "100%",
        }}
      >
        <Box component="form" onSubmit={SubmitHandler} sx={{ px: 3, py: 2 }}>
          <Typography
            variant="h4"
            fontWeight={500}
            textTransform="uppercase"
            color="initial"
            textAlign="center"
            gutterBottom
          >
            Sign Up
          </Typography>
          <Grid container spacing={1}>
            <Grid xs={12} sm={4}>
              <Box
                flexDirection="column"
                display="flex"
                alignItems="center"
                justifyContent="start"
                gap={2}
              >
                <Avatar sx={{ height: 200, width: 200 }} variant="rounded" />
                <Button sx={{ width: 200 }} variant="outlined">
                  Upload a Profile Picture
                </Button>
              </Box>
            </Grid>
            <Grid xs={12} sm={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    required
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    required
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="Email"
                    name="email"
                    required
                    variant="outlined"
                    type="email"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={6} sm={3}>
                  <FormControl fullWidth>
                    <InputLabel>Gender</InputLabel>
                    <Select name="gender" label="Gender" required>
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={6} sm={3}>
                  <FormControl fullWidth>
                    <InputLabel>User Type</InputLabel>
                    <Select name="userType" label="User Type" required>
                      <MenuItem value="student">Student</MenuItem>
                      <MenuItem value="alumni">Alumni</MenuItem>
                      <MenuItem value="guest">Guest</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Phone Number"
                    name="number"
                    variant="outlined"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Location />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Password"
                    name="password"
                    required
                    variant="outlined"
                    type="password"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    label="address"
                    name="address"
                    variant="outlined"
                    type="text"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      padding: "12px",
                      marginTop: "15px",
                    }}
                  >
                    SIGN UP
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="body2" align="center" mt={2}>
                    Already have an account?{" "}
                    <Button component={Link} to="/login" variant="text">
                      Login
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Signup;
