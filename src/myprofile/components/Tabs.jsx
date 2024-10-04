import React, { useState, useContext } from "react";
import { Box, CircularProgress, Tabs as MuiTabs, Tab } from "@mui/material";
import { useParams } from "react-router-dom";
import About from "./About";
import WorkHistory from "./WorkHistory";
import Academic from "./Academic";
import useFetch from "../../CustomHooks/useFetch";

const TabComponent = () => {
  const userId = useParams().userId;

  const { data, isLoading, isError, error } = useFetch({
    url: "http://localhost:3000/myprofile/getinfo",
    queryKey: ["gettinguserinfo"],
    params: { userId },
  });

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

  // If data is loading, show a loading spinner
  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <MuiTabs
        value={value}
        sx={{ ml: 2 }}
        onChange={handleChange}
        textColor="secondary"
      >
        <Tab label="About" />
        {/* Conditionally render the additional tabs but don't conditionally call hooks */}
        {data && data.user_type !== "guest" && <Tab label="Work History" />}
        {data && data.user_type !== "guest" && <Tab label="Academics" />}
      </MuiTabs>

      <Box sx={{ padding: 2 }}>
        {renderContent()} {/* Render content based on selected tab */}
      </Box>
    </Box>
  );
};

export default TabComponent;
