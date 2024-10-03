import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
} from "@mui/material";
import ProfileCards from "./ProfileCards";
import MyList from "./MyList";
import RequestedAlumni from "./RequestedAlumni";
import MyRequest from "./MyRequest";

// Main tabbed component
const TabbedComponent = ({ searchQuery, batch, department }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="All Profiles" />
        <Tab label="Connected Alumni" />
        <Tab label="Pending Request" />
        <Tab label="My Request" />
      </Tabs>
      <Box sx={{ p: 1 }}>
        {value === 0 && (
          <ProfileCards 
          searchQuery={searchQuery} 
          batch={batch} 
          department={department}  
          />
        )}
        {value === 1 && <MyList />}
        {value === 2 && <RequestedAlumni />}
        {value === 3 && <MyRequest />}
      </Box>
    </Box>
  );
};

export default TabbedComponent;
