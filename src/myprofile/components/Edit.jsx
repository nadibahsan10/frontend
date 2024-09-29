import React, { useState, useContext, useRef } from "react";
import {
  Box,
  Grid,
  Avatar,
  TextField,
  Typography,
  Divider,
  Button,
  IconButton,
  MenuItem,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { AuthContext } from "../../Auth/AuthContext";

import EditIcon from "@mui/icons-material/Edit";
const Edit = ({ user, onSave }) => {
  const imageRef = useRef([]);
  const openImage = () => {
    imageRef.current.click();
  };
  const auth = useContext(AuthContext);

  // Local state for form inputs
  const [editData, setEditData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editData); // Save the updated data
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 4 }}>
      {/* Editable Basic Information */}

      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Avatar sx={{ width: 120, height: 120, margin: "auto", mb: 2 }} />
        <input
          ref={imageRef}
          type="file"
          name="profilePicture"
          style={{ display: "none" }}
        />
        <Button
          onClick={openImage}
          sx={{ mb: 2 }}
          startIcon={<EditIcon />}
          variant="outlined"
        >
          Change Profile
        </Button>
        <Button
          sx={{ mb: 2, ml: 2 }}
          startIcon={<ArticleIcon />}
          variant="outlined"
        >
          Add Resume
        </Button>
        <Typography
          sx={{ width: "100%" }}
          textAlign="start"
          variant="h6"
          gutterBottom
        >
          Personal Information
        </Typography>
        <TextField
          fullWidth
          label="Phone Number"
          name="phoneNumber"
          value={editData.phoneNumber}
          onChange={handleChange}
        />
      </Box>

      <Divider />

      {/* Editable Address Information */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          Address & Local Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Street Address"
              name="streetAddress"
              value={editData.streetAddress}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={editData.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="State/Province"
              name="state"
              value={editData.state}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Postal Code"
              name="postalCode"
              value={editData.postalCode}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={editData.country}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Home Town"
              name="homeTown"
              value={editData.homeTown}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>

      <Divider />

      {/* Editable Social Links */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          Social Links
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="LinkedIn"
              name="linkedIn"
              value={editData.linkedIn}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Facebook"
              name="facebook"
              value={editData.linkedIn}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="GitHub"
              name="github"
              value={editData.github}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Twitter"
              name="twitter"
              value={editData.twitter}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Personal Website"
              name="website"
              value={editData.website}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>

      <Divider />

      {/* Editable Skills & Hobbies */}
      {auth.role !== "guest" && (
        <>
          <Box sx={{ my: 4 }}>
            <Typography variant="h6" gutterBottom>
              Skills & Interests
            </Typography>
            <TextField
              fullWidth
              label="Skills"
              name="skills"
              value={editData.skills}
              onChange={handleChange}
              multiline
              rows={2}
            />
            <TextField
              fullWidth
              label="Hobbies"
              name="hobbies"
              value={editData.hobbies}
              onChange={handleChange}
              multiline
              rows={2}
              sx={{ mt: 2 }}
            />
          </Box>
          <Divider />
        </>
      )}

      {/* Editable Work Information */}
      {auth.role !== "guest" && (
        <>
          <Box sx={{ my: 4 }}>
            <Typography variant="h6" gutterBottom>
              Education & Work Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="University/College"
                  name="university"
                  value={editData.university}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Degree/Program"
                  name="degree"
                  value={editData.degree}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Graduation Year"
                  name="graduationYear"
                  value={editData.graduationYear}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Job Title"
                  name="jobTitle"
                  value={editData.jobTitle}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Company"
                  name="company"
                  value={editData.company}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Industry"
                  name="industry"
                  value={editData.industry}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Box>
          <Divider />
        </>
      )}

      {/* Networking and Communication Preferences */}
      {auth.role !== "guest" && (
        <>
          <Box sx={{ my: 4 }}>
            <Typography variant="h6" gutterBottom>
              Networking Preferences
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  select
                  fullWidth
                  label="Willing to Mentor"
                  name="willingToMentor"
                  value={editData.willingToMentor}
                  onChange={handleChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  fullWidth
                  label="Looking for Job Opportunities"
                  name="jobOpportunities"
                  value={editData.jobOpportunities}
                  onChange={handleChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Preferred Contact Method"
                  name="preferredContactMethod"
                  value={editData.preferredContactMethod}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Box>
          <Divider />
        </>
      )}

      {/* Save Button */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default Edit;
