import { Box, IconButton, Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const PreviewImage = ({ images }) => {
  
  if (images.length === 0) {
    return;
  }
  return (
    <>
     
      <Box display="flex" marginBottom={2} gap={2} flexWrap="wrap">
        {images.map((item, index) => {
          return (
            <Box position="relative">
              <Avatar
                key={index}
                variant="rounded"
                src="./profileImage.webp"
                sx={{ height: 100, width: "auto" }}
              />
              <IconButton sx={{ position: "absolute", top: 0, right: 0 }}>
                <CloseIcon />
              </IconButton>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default PreviewImage;
