import React from "react";
import { ImageList, ImageListItem } from "@mui/material";

const ImageItems = () => {
  return (
    <ImageList sx={{ width: "100%", height: "150px" }} cols={4} rowHeight={150}>
      <ImageListItem>
        <img src="./profileImage.webp" alt="" />
      </ImageListItem>
      <ImageListItem>
        <img src="./profileImage.webp" alt="" />
      </ImageListItem>
      <ImageListItem>
        <img src="./profileImage.webp" alt="" />
      </ImageListItem>
      <ImageListItem>
        <img src="./profileImage.webp" alt="" />
      </ImageListItem>
    </ImageList>
  );
};

export default ImageItems;
