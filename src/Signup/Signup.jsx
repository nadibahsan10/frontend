import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
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
import { useMutation } from "@tanstack/react-query";

import Location from "./Location";
import { AuthContext } from "../Auth/AuthContext";
import { useInput } from "../CustomHooks/useInput";
import Loading from "../Shared/Loading";
import Popup from "../Shared/Popup";

import PreviewImage from "../Feed/components/PreviewImage";

const departments = [
  {
    id: 1,
    name: "Bachelor of Business Administration (BBA)",
    level: "Undergraduate",
  },
  {
    id: 2,
    name: "BBA in Accounting & Information Systems",
    level: "Undergraduate",
  },
  { id: 3, name: "Bachelor of Science in Economics", level: "Undergraduate" },
  { id: 4, name: "B.Sc. in Civil Engineering", level: "Undergraduate" },
  {
    id: 5,
    name: "B.Sc. in Computer Science & Engineering",
    level: "Undergraduate",
  },
  { id: 6, name: "B.Sc. in Data Science", level: "Undergraduate" },
  {
    id: 7,
    name: "B.Sc. in Electrical & Electronic Engineering",
    level: "Undergraduate",
  },
  {
    id: 8,
    name: "BSS in Environment and Development Studies",
    level: "Undergraduate",
  },
  {
    id: 9,
    name: "BSS in Media Studies and Journalism",
    level: "Undergraduate",
  },
  { id: 10, name: "BA in English", level: "Undergraduate" },
  { id: 11, name: "Bachelor of Pharmacy (B. Pharm)", level: "Undergraduate" },
  {
    id: 12,
    name: "Master of Business Administration (MBA)",
    level: "Graduate",
  },
  { id: 13, name: "Executive MBA (EMBA)", level: "Graduate" },
  { id: 14, name: "Master of Science in Economics", level: "Graduate" },
  { id: 15, name: "Master in Development Studies", level: "Graduate" },
  {
    id: 16,
    name: "M.Sc. in Computer Science & Engineering",
    level: "Graduate",
  },
];
const Signup = () => {
  const navigate = useNavigate();
  const imageRef = useRef([]);
  const imageOpen = () => {
    imageRef.current.click();
  };
  const { state, handleChange, uploadImage, updateImage, handleCityChange } =
    useInput({
      firstName: { value: "", isValid: true },
      lastName: { value: "", isValid: true },
      email: { value: "", isValid: true },
      gender: { value: "", isValid: true },
      userType: { value: "", isValid: true },
      number: { value: "+880 ", isValid: true },
      uiuId: { value: "", isValid: true },
      department: { value: undefined, isValid: true },
      city: null,
      password: { value: "", isValid: true },
      address: { value: "", isValid: true },
      image: null,
    });

  const mutation = useMutation({
    mutationFn: async () => {
      const formData = new FormData();
      formData.append("firstName", state.firstName.value);
      formData.append("lastName", state.lastName.value);
      formData.append("email", state.email.value);
      formData.append("gender", state.gender.value);
      formData.append("userType", state.userType.value);
      formData.append("number", state.number.value);
      formData.append("uiuId", state.uiuId.value);
      formData.append("department", state.department.value);
      formData.append("city", state.city !== null ? state.city.id : null);
      formData.append("password", state.password.value);
      formData.append("address", state.address.value);
      if (state.image !== null) {
        formData.append("profilePicture", Array.from(state.image)[0]);
      }

      const response = await axios.post(
        "http://localhost:3000/auth/signup",
        formData
      );
      return response.data.token;
    },
  });

  const auth = useContext(AuthContext);

  const SubmitHandler = async (event) => {
    event.preventDefault();
    // handle form submission
    mutation.mutate(undefined, {
      onSuccess: (data) => {
        console.log(data);
        localStorage.setItem("token", JSON.stringify(data));
        const user = JSON.parse(atob(data.split(".")[1]));
        auth.login(user);
        navigate("/");
      },
    });
  };
  if (mutation.isError) {
    console.log(mutation.error);
  }

  return (
    <>
      <Loading open={mutation.isPending} />
      {mutation.isError && (
        <Popup
          open={mutation.isError}
          onClose={() => {
            mutation.reset();
            if (mutation.error.response.status === 403) {
              navigate("/");
            }
          }} // Reset mutation state on close
          errorMessage={mutation.error.response.data.message}
          status={mutation.error.response.status}
        />
      )}

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
              sx={{ marginBottom: 5 }}
            >
              Sign Up
            </Typography>
            <Grid container spacing={1}>
              <Grid xs={12} item sm={4}>
                <Box
                  flexDirection="column"
                  display="flex"
                  alignItems="center"
                  justifyContent="start"
                  gap={2}
                >
                  {!state.image && (
                    <Avatar
                      sx={{ height: 200, width: 200 }}
                      variant="rounded"
                    />
                  )}

                  <PreviewImage images={state.image} />
                  <Button
                    sx={{ width: 200 }}
                    onClick={imageOpen}
                    variant="outlined"
                  >
                    Upload a Profile Picture
                  </Button>
                  <input
                    type="file"
                    ref={imageRef}
                    name="image"
                    onChange={uploadImage}
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                </Box>
              </Grid>
              <Grid xs={12} item sm={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First Name"
                      name="firstName"
                      required
                      value={state.firstName.value}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Last Name"
                      name="lastName"
                      value={state.lastName.value}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Email"
                      name="email"
                      value={state.email.value}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      type="email"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <FormControl fullWidth>
                      <InputLabel>Gender</InputLabel>
                      <Select
                        name="gender"
                        label="Gender"
                        value={state.gender.value}
                        onChange={handleChange}
                        required
                      >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <FormControl fullWidth>
                      <InputLabel>User Type</InputLabel>
                      <Select
                        name="userType"
                        value={state.userType.value}
                        onChange={handleChange}
                        label="User Type"
                        required
                      >
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
                      value={state.number.value}
                      onChange={handleChange}
                      variant="outlined"
                      type="text"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Location value={state.city} change={handleCityChange} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label="Password"
                      name="password"
                      value={state.password.value}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      type="password"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      label="Address"
                      value={state.address.value}
                      onChange={handleChange}
                      name="address"
                      variant="outlined"
                      type="text"
                      fullWidth
                    />
                  </Grid>
                  {/* Student & alumni Section */}
                  {(state.userType.value === "student" ||
                    state.userType.value === "alumni") && (
                    <>
                      <Grid item xs={6}>
                        <TextField
                          label="Please Enter Your University ID"
                          value={state.uiuId.value}
                          onChange={handleChange}
                          name="uiuId"
                          required
                          variant="outlined"
                          type="text"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="department-select-label">
                            Select Department
                          </InputLabel>
                          <Select
                            labelId="department-select-label"
                            id="department-select"
                            value={state.department.value || ""}
                            onChange={handleChange}
                            name="department"
                            label="Select Department"
                          >
                            {departments.map((department) => (
                              <MenuItem
                                key={department.id}
                                value={department.id}
                              >
                                {department.name} ({department.level})
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    </>
                  )}
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
                      Already have an account?
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
    </>
  );
};

export default Signup;
