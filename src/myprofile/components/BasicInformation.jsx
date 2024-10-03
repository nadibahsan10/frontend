import React, { useContext } from "react";
import {
  Box,
  Grid,
  Avatar,
  Typography,
  Divider,
  Link,
  IconButton,
  Button,
} from "@mui/material";
import { Link as DomLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EditIcon from "@mui/icons-material/Edit";
import { AuthContext } from "../../Auth/AuthContext";

const BasicInformation = ({ user }) => {
  const auth = useContext(AuthContext);
  const handleDownloadResume = () => {
    window.open(user.resumeLink, "_blank");
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${user.email}`;
  };

  const handleSendMessage = () => {
    alert("Messaging feature is not implemented yet!");
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 4 }}>
      {/* Basic Information */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Avatar
          src={user.profilePicture}
          alt={user.fullName}
          sx={{ width: 120, height: 120, margin: "auto", mb: 2 }}
        />
        <Typography variant="h5">{user.fullName}</Typography>
        <Typography color="textSecondary">{user.email}</Typography>
        <Typography>{user.phoneNumber}</Typography>
      </Box>
      <Box
        sx={{ mt: 3, mb: 3, display: "flex", gap: 2, justifyContent: "center" }}
      >
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Message
        </Button>
        <Button variant="contained" color="secondary" onClick={handleSendEmail}>
          Send Email
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleDownloadResume}
        >
          Download Resume
        </Button>
        <IconButton component={DomLink} to="./edit" sx={{ marginLeft: "auto" }}>
          <EditIcon color="primary" />
        </IconButton>
      </Box>

      <Divider />
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          Address & Local Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Street Address:</Typography>
            <Typography color="textSecondary">{user.streetAddress}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">City:</Typography>
            <Typography color="textSecondary">{user.city}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">State/Province:</Typography>
            <Typography color="textSecondary">{user.state}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Postal Code:</Typography>
            <Typography color="textSecondary">{user.postalCode}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Country:</Typography>
            <Typography color="textSecondary">{user.country}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle1">Home Town:</Typography>
            <Typography color="textSecondary">{user.homeTown}</Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      {/* Education and Work Information */}
      {auth.role !== "guest" && (
        <>
          <Box sx={{ my: 4 }}>
            <Typography variant="h6" gutterBottom>
              Education & Work Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Degree/Program:</Typography>
                <Typography color="textSecondary">{user.degree}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Graduation Year:</Typography>
                <Typography color="textSecondary">
                  {user.graduationYear}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Job Title:</Typography>
                <Typography color="textSecondary">{user.jobTitle}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Company:</Typography>
                <Typography color="textSecondary">{user.company}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Industry:</Typography>
                <Typography color="textSecondary">{user.industry}</Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider />
        </>
      )}

      {/* Social and Contact Information */}

      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          Social Links
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">LinkedIn:</Typography>
            <Link href={user.linkedIn} target="_blank" rel="noopener">
              <IconButton color="primary">
                <LinkedInIcon />
              </IconButton>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">GitHub:</Typography>
            <Link href={user.github} target="_blank" rel="noopener">
              <IconButton color="primary">
                <GitHubIcon />
              </IconButton>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Twitter:</Typography>
            <Link href={user.twitter} target="_blank" rel="noopener">
              <IconButton color="primary">
                <TwitterIcon />
              </IconButton>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Personal Website:</Typography>
            <Link href={user.website} target="_blank" rel="noopener">
              {user.website}
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Facebook:</Typography>
            <Link href={user.website} target="_blank" rel="noopener">
              www.facebook.com/johndoe
            </Link>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      {/* Skills and Interests */}
      {auth.role !== "guest" && (
        <>
          {" "}
          <Box sx={{ my: 4 }}>
            <Typography variant="h6" gutterBottom>
              Skills & Interests
            </Typography>
            <Typography>{user.skills.join(", ")}</Typography>
            <Typography variant="subtitle1" mt={2}>
              Hobbies/Interests:
            </Typography>
            <Typography>{user.hobbies}</Typography>
          </Box>
          <Divider />
        </>
      )}

      {/* Networking and Communication Preferences */}
      {auth.role !== "guest" && (
        <>
          {" "}
          <Box sx={{ my: 4 }}>
            <Typography variant="h6" gutterBottom>
              Networking Preferences
            </Typography>
            <Typography>
              <strong>Willing to Mentor:</strong>{" "}
              {user.willingToMentor ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Looking for Job Opportunities:</strong>{" "}
              {user.jobOpportunities ? "Yes" : "No"}
            </Typography>
            <Typography>
              <strong>Preferred Contact Method:</strong>{" "}
              {user.preferredContactMethod}
            </Typography>
          </Box>
          <Divider />
        </>
      )}

      {/* Account Information */}

      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          Account Information
        </Typography>
        <Typography>
          <strong>Account Created:</strong> {user.accountCreationDate}
        </Typography>
        <Typography>
          <strong>Last Active:</strong> {user.lastActive}
        </Typography>
        <Typography>
          <strong>Profile Visibility:</strong> {user.profileVisibility}
        </Typography>
      </Box>

      {/* Buttons: Message, Email, Download Resume */}
    </Box>
  );
};

// Example of user data to be passed as props

export default BasicInformation;
