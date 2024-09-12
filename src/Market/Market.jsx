import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";

import MarketHome from "./pages/MarketHome";
const Market = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<MarketHome />} />
        <Route path="/product" element={<MarketHome />} />
        <Route path="/ad" element={<h5>Set Add</h5>} />
      </Routes>
    </Box>
  );
};

export default Market;
