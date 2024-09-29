import React from "react";
import { Box, Container, Grid, Avatar, Typography } from "@mui/material";

import BasicInformation from "../components/BasicInformation";
const ProfileHome = () => {
  const user = {
    fullName: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    profilePicture: "https://example.com/profile.jpg",
    university: "Example University",
    degree: "Computer Science",
    graduationYear: "2022",
    jobTitle: "Software Engineer",
    company: "Tech Corp",
    industry: "Information Technology",
    linkedIn: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    twitter: "https://twitter.com/johndoe",
    website: "https://johndoe.com",
    skills: ["JavaScript", "React", "Node.js"],
    hobbies: "Reading, Gaming, Traveling",
    willingToMentor: true,
    jobOpportunities: false,
    preferredContactMethod: "Email",
    postsCount: 10,
    eventsAttended: 5,
    accountCreationDate: "2021-01-01",
    lastActive: "2024-09-27",
    profileVisibility: "Public",
  };
  return (
    <Container maxWidth="xl">
      <BasicInformation user={user} />
    </Container>
  );
};

export default ProfileHome;
