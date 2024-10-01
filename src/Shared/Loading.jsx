import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Loading = ({ open, message = "Loading..." }) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <Box
        gap={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="center"
      >
        <CircularProgress color="inherit" />
        <Typography variant="h6">{message}</Typography>
      </Box>
    </Backdrop>
  );
};

export default Loading;
