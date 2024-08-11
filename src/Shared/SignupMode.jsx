import React, { useState } from "react";
import "./SignupMode.css";
import {
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  Link,
  FormControl,
  InputLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormHelperText,
  FormGroup,
} from "@mui/material";
const SignupMode = (props) => {
  const [userType, setUserType] = useState("");
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };
  return (
    <Grid
      container
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: "White",
        borderRadius: "4px",
      }}
    >
      <Grid xs={6} item className="signup-left">
        <h2>Create a new account</h2>
        <hr
          style={{
            border: "1px solid #780000",
            margin: "5px 0",
            width: "100%",
          }}
        />
        <form action="">
          <TextField
            label="First Name"
            type="Text"
            variant="outlined"
            sx={{ marginTop: "10px", width: "100%" }}
          />
          <TextField
            label="Last Name"
            type="Text"
            variant="outlined"
            sx={{ marginTop: "10px", width: "100%" }}
          />

          <Grid container sx={{ width: "100%", marginTop: "10px" }}>
            <Grid xs={5.8} item>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={handleGender}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={0.4}></Grid>
            <Grid xs={5.8} item>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">User Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userType}
                  label="User Type"
                  onChange={handleChange}
                >
                  <MenuItem value="student">Student</MenuItem>
                  <MenuItem value="alumni">Alumni</MenuItem>
                  <MenuItem value="guest">Guest</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <TextField
            label="Personal Email / University Email "
            type="Text"
            variant="outlined"
            sx={{ marginTop: "10px", width: "100%" }}
          />
          <TextField
            label="Password"
            type="Password"
            variant="outlined"
            sx={{ marginTop: "10px", width: "100%" }}
          />

          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "100%",
              padding: "10px 0",
              color: "white",
              marginTop: "10px",
            }}
          >
            SIGNUP
          </Button>
          <hr
            style={{
              border: "1px solid #780000",
              margin: "10px 0",
              width: "100%",
            }}
          />
          <p>
            Already have an account?
            <Link onClick={props.changeMode}> Login</Link>
          </p>
        </form>
      </Grid>

      <Grid xs={6} item className="signup-right">
        <img src="./profileImage.webp" alt="profilePicture" />
        <h4>This is picture</h4>
        <Button
          variant="contained"
          color="white"
          sx={{ width: "100%", padding: "10px 0", color: "primary.main" }}
        >
          UPLOAD A PROFILE PICTURE
        </Button>
      </Grid>
    </Grid>
  );
};

export default SignupMode;
