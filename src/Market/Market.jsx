import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";

import MarketHome from "./pages/MarketHome";
import Products from "./pages/Products";
import IndividualProduct from "./pages/IndividualProduct";
const Market = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<MarketHome />} />
        <Route path="/product" element={<Products />} />
        <Route path="/ad" element={<h5>Set Add</h5>} />
        <Route
          path="product/individualproduct/:id"
          element={<IndividualProduct />}
        />
      </Routes>
    </Box>
  );
};

export default Market;
