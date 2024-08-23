import React from "react";
import { ImageList, ImageListItem } from "@mui/material";

const ImageItems = ({ image }) => {
  return (
    <ImageList sx={{ width: "100%", height: "150px" }} cols={4} rowHeight={150}>
      {image.map((item, index) => {
        return (
          <ImageListItem key={index}>
            <img src={`http://localhost:3000/${item}`} alt="" />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default ImageItems;
