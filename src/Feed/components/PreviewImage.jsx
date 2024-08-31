import { useEffect, useState } from "react";
import { Box, IconButton, Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const PreviewImage = ({ images, update, setFiles }) => {
  if (images === null) {
    return;
  }

  useEffect(() => {
    update(images);
  }, [images]);
  const handleDelete = (item) => {
    setFiles((prev) => prev.filter((file) => file !== item));
  };

  if (images === 0) {
    return;
  }

  return (
    <>
      <Box display="flex" marginBottom={2} gap={2} flexWrap="wrap">
        {images.map((item, index) => {
          const srcLink = URL.createObjectURL(item);
          return (
            <Box position="relative" key={index}>
              <Avatar
                key={index}
                variant="rounded"
                src={srcLink}
                sx={{ height: 100, width: "auto" }}
              />
              <IconButton
                onClick={() => {
                  handleDelete(item);
                }}
                color="white"
                sx={{ position: "absolute", top: 0, right: 0 }}
              >
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
