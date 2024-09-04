import { Box, Avatar, Button, Typography, IconButton } from "@mui/material";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";

import NameAvatar from "../../Shared/NameAvatar";
import Reactions from "./Reactions";
import Image from "./Image";
import { getPostLikes } from "../Functions/likes";

const Posts = ({
  reactions,
  content,
  created_at,
  first_name,
  last_name,
  id,
  image_url,
  profile_picture,
  uid,
  title,
}) => {
  const dataToPass = {
    first_name,
    last_name,
    id,
    content,
    uid,
    profile_picture,
    title,
    image_url,
    created_at,
  };
  return (
    <Box
      padding={4}
      marginBottom={2}
      borderRadius={2}
      border="2px solid #EBEBEB"
      position="relative"
    >
      <Box display="flex" alignItems="center">
        <NameAvatar name={first_name + " " + last_name} subtitle={created_at} />
        <IconButton sx={{ marginLeft: "auto" }}>
          <SettingsIcon fontSize="large" />
        </IconButton>
      </Box>

      <Box marginTop={4} marginBottom={2}>
        <Typography variant="h4" textAlign="center" marginBottom={5}>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="justify"
          sx={{ lineHeight: 2 }}
        >
          {content}
        </Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" marginTop={2} gap={3}>
        {image_url.length !== 0 &&
          image_url.map((item, index) => {
            return <Image key={index} src={`http://localhost:3000/${item}`} />;
          })}
      </Box>

      {reactions && (
        <Reactions
          id={id}
          dataToPass={dataToPass}
          getLikes={getPostLikes}
          comment
        />
      )}
    </Box>
  );
};

export default Posts;
