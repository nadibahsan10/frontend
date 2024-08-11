import React, { useRef, useState } from "react";
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
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
const SignupMode = (props) => {
  const [userType, setUserType] = useState("");
  const [gender, setGender] = useState("");

  const imgRef = useRef([]);
  const uploadImage = () => {
    imgRef.current.click();
  };

  const [img, setImg] = useState(null);
  const [imgName, setImgName] = useState(null);
  const imgPreview = (event) => {
    let file = event.target.files[0];
    if (!file) {
      setImg(null);
      setImgName(null);
    } else {
      setImg(URL.createObjectURL(file));
      setImgName(file.name);
    }
  };

  const handleUser = (event) => {
    setUserType(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
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
      <IconButton
        aria-label="delete"
        size="large"
        sx={{ position: "absolute", top: "10px", right: "10px" }}
        onClick={props.onClose}
      >
        <CloseIcon fontSize="inherit" color="white" />
      </IconButton>
      <Grid xs={6} item className="signup-left">
        <h2>Create a new account</h2>
        <hr
          style={{
            border: "1px solid #780000",
            margin: "5px 0",
            width: "100%",
          }}
        />
        <form
          onSubmit={SubmitHandler}
          method="POST"
          enctype="multipart/form-data"
        >
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
                  onChange={handleUser}
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
            type="submit"
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
            <Button
              type="button"
              variant="text"
              disableRipple
              size="small"
              onClick={props.changeMode}
            >
              Login
            </Button>
          </p>
          <input
            type="file"
            onChange={imgPreview}
            ref={imgRef}
            style={{ display: "none" }}
          />
        </form>
      </Grid>

      <Grid xs={6} item className="signup-right">
        <img src={img ? img : "./profileImage.webp"} alt="profilePicture" />
        <h4>{imgName ? imgName : "Upload you profile Picture"}</h4>
        <Button
          variant="contained"
          color="white"
          sx={{ width: "100%", padding: "10px 0", color: "primary.main" }}
          onClick={uploadImage}
        >
          UPLOAD
        </Button>
      </Grid>
    </Grid>
  );
};

export default SignupMode;
