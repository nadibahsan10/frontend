import React from "react";
import { Box, Typography } from "@mui/material";

import NameAvatar from "../../Shared/NameAvatar";
import Reactions from "./Reactions";
const SingleComment = ({ IsDelete }) => {
  return (
    <Box marginTop={2}>
      <NameAvatar />
      <Typography variant="body2" sx={{ lineHeight: 2 }} marginLeft={7}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas incidunt
        non ea reprehenderit reiciendis, minus voluptatem velit, optio commodi
        accusantium esse nulla necessitatibus quibusdam maiores. Obcaecati
        necessitatibus dignissimos officiis? Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Amet deserunt culpa corrupti itaque sequi
        non expedita ipsum maxime officiis adipisci perspiciatis quia
        praesentium nulla voluptatem animi, cum, voluptatibus in ipsa est omnis
        reprehenderit illo quibusdam? Hic eveniet quasi ducimus modi!
      </Typography>
      <Box marginLeft={7}>
        <Reactions delete={IsDelete ? true : false} />
      </Box>
      <hr />
    </Box>
  );
};

export default SingleComment;
