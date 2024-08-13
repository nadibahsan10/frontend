import React from "react";
import { Avatar, Typography } from "@mui/material";

import "./Avatar.css";

const ProfilePicture = () => {
  return (
    <div className="profile-picture">
      <Avatar
        sx={{ height: 50, width: 50, marginRight: "10px" }}
        alt="Remy Sharp"
        src="/profileImage.webp"
      />

      <h3>Shahriar Rahman Shaon</h3>
    </div>
  );
};

export default ProfilePicture;
