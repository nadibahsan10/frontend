import React, { useRef, useState, useContext } from "react";
import axios from "axios";
import "./SignupMode.css";
import {
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import { AuthContext } from "../Auth/AuthContext";
import ErrorModal from "./ErrorModal";

const SignupMode = (props) => {
  const auth = useContext(AuthContext);

  const [userType, setUserType] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const closeSuccess = () => {
    setSuccess(false);
  };

  const closeError = () => {
    setError(false);
  };
  const [isLoading, setIsloading] = useState(false);

  const imgRef = useRef([]);
  const uploadImage = () => {
    imgRef.current.click();
  };

  const [img, setImg] = useState(null);
  const [imgName, setImgName] = useState(null);
  const imgPreview = (event) => {
    let { name } = event.target;
    let file = event.target.files[0];
    if (!file) {
      setImg(null);
      setImgName(null);
    } else {
      setImg(URL.createObjectURL(file));
      setImgName(file.name);
      setForm((prev) => {
        return {
          ...prev,
          [name]: file,
        };
      });
    }
  };

  const handleUser = (event) => {
    setUserType(event.target.value);
    const { name, value } = event.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleGender = (event) => {
    setGender(event.target.value);
    const { name, value } = event.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const SubmitHandler = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("firstName", form.firstName);
    data.append("lastName", form.lastName);
    data.append("email", form.email);
    data.append("password", form.password);
    data.append("gender", form.gender);
    data.append("userType", form.userType);
    if (form.profilePicture) {
      data.append("profilePicture", form.profilePicture); // Append file to FormData
    }

    try {
      setIsloading(true);
      const response = await axios.post(
        "http://localhost:3000/auth/signup",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      var token = response.data.token;
      localStorage.setItem("user", JSON.stringify(token));

      const user = JSON.parse(atob(token.split(".")[1]));
      auth.login(user);
      setSuccess(true);
      setIsloading(false);
      props.onClose();
    } catch (error) {
      setIsloading(false);
      setError(error);
    }
  };

  //Form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    userType: "",
    profilePicture: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const formContent = (
    <>
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
        encType="multipart/form-data"
      >
        <TextField
          label="First Name"
          value={form.firstName}
          name="firstName"
          onChange={handleChange}
          required
          type="Text"
          variant="outlined"
          sx={{ marginTop: "10px", width: "100%" }}
        />
        <TextField
          label="Last Name"
          value={form.lastName}
          name="lastName"
          onChange={handleChange}
          required
          type="Text"
          variant="outlined"
          sx={{ marginTop: "10px", width: "100%" }}
        />

        <Grid container sx={{ width: "100%", marginTop: "10px" }}>
          <Grid xs={5.8} item>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                required
                name="gender"
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
                required
                name="userType"
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
          required
          value={form.email}
          name="email"
          label="Personal Email / University Email "
          type="email"
          variant="outlined"
          onChange={handleChange}
          sx={{ marginTop: "10px", width: "100%" }}
        />
        <TextField
          required
          value={form.password}
          name="password"
          label="Password"
          onChange={handleChange}
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
          name="profilePicture"
          type="file"
          onChange={imgPreview}
          ref={imgRef}
          style={{ display: "none" }}
        />
      </form>
    </>
  );

  return (
    <>
      {success && (
        <ErrorModal
          title="Congratulations"
          message="Signup Has been Completed"
          handleClose={closeSuccess}
        />
      )}
      {error && (
        <ErrorModal
          title="Signup Failed"
          color="primary"
          message={error.response.data.message}
          handleClose={closeError}
        />
      )}
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
          {isLoading ? <CircularProgress /> : formContent}
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
    </>
  );
};

export default SignupMode;
