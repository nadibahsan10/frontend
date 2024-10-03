import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import LeftNav from "../Component/LeftNav";
import TabbedComponent from "../Component/TabbedComponent";

function AlumniHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [batch, setBatch] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  // Handler to update search query
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handler to update batch
  const handleBatchChange = (event) => {
    setBatch(event.target.value);
  };

  // Handler to update department
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };


  return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
      <Typography variant="h4" sx={{ textAlign: "center", padding: "10px" }}>
        Welcome to UIU Alumni Portal
      </Typography>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={3} sx={{ padding: 2 }}>
          <LeftNav
            searchQuery={searchQuery}
            batch={batch}
            department={selectedDepartment}
            handleSearchChange={handleSearchChange}
            handleBatchChange={handleBatchChange}
            handleDepartmentChange={handleDepartmentChange}
          />
        </Grid>
        <Grid item xs={9} sx={{ padding: 0 }}>
          <TabbedComponent
            searchQuery={searchQuery}
            batch={batch}
            department={selectedDepartment} // Pass the department data
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AlumniHome;
