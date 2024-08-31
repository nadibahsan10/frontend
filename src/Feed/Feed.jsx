import { Routes, Route } from "react-router-dom";
import React from "react";
import FeedHome from "./pages/FeedHome";
import Comment from "./components/Comment";

const FeedMain = () => {
  return (
    <Routes>
      <Route path="/*" element={<FeedHome />} />
      <Route path="/comments/:postId" element={<Comment />} />
    </Routes>
  );
};

export default FeedMain;
