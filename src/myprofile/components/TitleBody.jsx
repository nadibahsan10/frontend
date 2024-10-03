import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info"; // Import icons as needed
import DescriptionIcon from "@mui/icons-material/Description"; // Another example icon

const TitleBody = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Title Section */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: 600,
          color: "text.primary",
        }}
      >
        This is the title
      </Typography>

      {/* Body Text Section */}
      <Typography
        variant="subtitle1"
        sx={{
          color: "text.secondary",
          lineHeight: 1.6,
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
        explicabo!
      </Typography>

      {/* Additional Details Section with Icons */}
      <List sx={{ marginTop: 2 }}>
        <ListItem>
          <ListItemIcon>
            <InfoIcon color="primary" />
          </ListItemIcon>
          <Typography variant="body2" color="text.primary">
            Additional Info 1
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DescriptionIcon color="primary" />
          </ListItemIcon>
          <Typography variant="body2" color="text.primary">
            Additional Info 2
          </Typography>
        </ListItem>
        {/* Add more ListItems as needed */}
      </List>
    </Box>
  );
};

export default TitleBody;
