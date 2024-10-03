import React from "react";
import { Routes, Route } from "react-router-dom";

import ProfileHome from "./pages/ProfileHome";
import EditProfile from "./pages/EditProfile";
const MyProfile = () => {
  return (
    <Routes>
      <Route path="/:userId" element={<ProfileHome />} />
      <Route path="/:userId/edit" element={<EditProfile />} />
    </Routes>
  );
};

export default MyProfile;
