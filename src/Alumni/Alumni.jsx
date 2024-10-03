import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import AlumniHome from "./Pages/AlumniHome";
import EventHome from "./Pages/EventHome";
import MentorShip from "./Component/MentorShip";
import SuccessStories from "./Pages/SuccessStories";

const Alumni = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<AlumniHome />} />
        <Route path="/events" element={<EventHome />} />
        <Route path="/mentorship" element={<MentorShip />} />
        <Route path="/successstories" element={<SuccessStories />} />
      </Routes>
    </Box>
  );
};

export default Alumni;
