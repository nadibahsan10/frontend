import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";

import MarketHome from "./pages/MarketHome";
import Products from "./pages/Products";
import IndividualProduct from "./pages/IndividualProduct";
import AddProducts from "./pages/AddProducts";
import MyProduct from "./pages/MyProduct";
import JobMarket from "./pages/JobMarket";
const Market = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<MarketHome />} />
        <Route path="/product" element={<Products />} />
        <Route path="/myproduct" element={<MyProduct />} />
        <Route path="/individualproduct/:id" element={<IndividualProduct />} />
        <Route path="/addproduct" element={<AddProducts />} />
        <Route path="/jobmarket" element={<JobMarket />} />
      </Routes>
    </Box>
  );
};

export default Market;
