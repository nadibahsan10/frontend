import React from "react";
import { Box, Typography } from "@mui/material";

import NameAvatar from "../../Shared/NameAvatar";
import Reactions from "./Reactions";
import { getCommentLikes } from "../Functions/likes";
const SingleComment = ({
  IsDelete,
  id,
  uid,
  pid,
  created_at,
  first_name,
  last_name,
  profile_picture,
  image_url,
  content,
}) => {
  return (
    <Box marginTop={2}>
      <NameAvatar
        name={first_name + " " + last_name}
        src={`http://localhost:3000/${profile_picture}`}
        subtitle={created_at}
      />
      <Typography variant="body2" sx={{ lineHeight: 2 }} marginLeft={7}>
        {content}
      </Typography>
      <Box marginLeft={7}>
        <Reactions
          id={id}
          getLikes={getCommentLikes}
          delete={IsDelete ? true : false}
        />
      </Box>
      <hr />
    </Box>
  );
};

export default SingleComment;
