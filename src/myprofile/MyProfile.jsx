import React from "react";
import { Routes, Route } from "react-router-dom";

import ProfileHome from "./pages/ProfileHome";

const MyProfile = () => {
  return (
    <Routes>
      <Route path="/:userId" element={<ProfileHome />} />
    </Routes>
  );
};

export default MyProfile;
