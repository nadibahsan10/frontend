import { Routes, Route } from "react-router-dom";
import React from "react";
import FeedHome from "./pages/FeedHome";

const FeedMain = () => {
  return (
    <Routes>
      <Route path="/*" element={<FeedHome />} />
    </Routes>
  );
};

export default FeedMain;
