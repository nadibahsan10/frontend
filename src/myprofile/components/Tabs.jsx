import React, { useState } from "react";
import { Box, Tabs as MuiTabs, Tab, Typography } from "@mui/material";

import About from "./About";
import WorkHistory from "./WorkHistory";
import Academic from "./Academic";
// Sample components for demonstration

// Renamed component to avoid conflict
const TabComponent = () => {
  const [value, setValue] = useState(0); // State to track the selected tab

  const handleChange = (event, newValue) => {
    setValue(newValue); // Update the state with the selected tab index
  };

  // Function to render the corresponding content based on selected tab
  const renderContent = () => {
    switch (value) {
      case 0:
        return <About />;
      case 1:
        return <WorkHistory />;
      case 2:
        return <Academic />;
      default:
        return <About />;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <MuiTabs
        value={value}
        sx={{ ml: 2 }}
        onChange={handleChange}
        textColor="secondary"
      >
        <Tab label="About" />
        <Tab label="Work History" />
        <Tab label="Academics" />
      </MuiTabs>
      <Box sx={{ padding: 2 }}>
        {renderContent()} {/* Render content based on selected tab */}
      </Box>
    </Box>
  );
};

export default TabComponent;
