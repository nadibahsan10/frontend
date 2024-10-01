import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";
import AlumniHome from "./Pages/AlumniHome";

const Alumni = () => {
  return (
    <Box>
      <Routes>
        <Route path="/*" element={<AlumniHome />} />
      </Routes>
    </Box>
  );
};

export default Alumni;
