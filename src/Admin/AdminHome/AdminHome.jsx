import React from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { NavLink, Routes, Route } from "react-router-dom";

import AdminUsers from "./AdminUsers";
import AdminQuesions from "./AdminQuestions";
import Dashboard from "./Dashboard";

const AdminHome = () => {
  return (
    <Grid container spacing={3}>
      {/* Sidebar */}
      <Grid item xs={3}>
        <Box
          sx={{
            height: "90vh",
            backgroundColor: "primary.main",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          {/* Navigation List */}
          <ListItem disablePadding>
            <NavLink
              to="./dashbord"
              style={({ isActive }) => ({
                textDecoration: "none",
                width: "100%",
              })}
            >
              {({ isActive }) => (
                <ListItemButton
                  sx={{
                    width: "100%",
                    backgroundColor: isActive
                      ? "secondary.main"
                      : "transparent",
                    borderRadius: 1,
                    "&:hover": {
                      backgroundColor: isActive
                        ? "secondary.main"
                        : "primary.dark",
                    },
                  }}
                >
                  <ListItemText primary="Dashbord" sx={{ color: "#fff" }} />
                </ListItemButton>
              )}
            </NavLink>
          </ListItem>
          <List>
            <ListItem disablePadding>
              <NavLink
                to="./users"
                style={({ isActive }) => ({
                  textDecoration: "none",
                  width: "100%",
                })}
              >
                {({ isActive }) => (
                  <ListItemButton
                    sx={{
                      width: "100%",
                      backgroundColor: isActive
                        ? "secondary.main"
                        : "transparent",
                      borderRadius: 1,
                      "&:hover": {
                        backgroundColor: isActive
                          ? "secondary.main"
                          : "primary.dark",
                      },
                    }}
                  >
                    <ListItemText primary="Users" sx={{ color: "#fff" }} />
                  </ListItemButton>
                )}
              </NavLink>
            </ListItem>

            <ListItem disablePadding>
              <NavLink
                to="./questions"
                style={({ isActive }) => ({
                  textDecoration: "none",
                  width: "100%",
                })}
              >
                {({ isActive }) => (
                  <ListItemButton
                    sx={{
                      width: "100%",
                      backgroundColor: isActive
                        ? "secondary.main"
                        : "transparent",
                      borderRadius: 1,
                      "&:hover": {
                        backgroundColor: isActive
                          ? "secondary.main"
                          : "primary.dark",
                      },
                    }}
                  >
                    <ListItemText primary="Questions" sx={{ color: "#fff" }} />
                  </ListItemButton>
                )}
              </NavLink>
            </ListItem>

            {/* Add more links as needed */}
          </List>
        </Box>
      </Grid>

      {/* Main Content */}
      <Grid item xs={9}>
        <Routes>
          <Route path="dashbord" element={<Dashboard />} />

          <Route path="users" element={<AdminUsers />} />
          <Route path="questions" element={<AdminQuesions />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default AdminHome;
