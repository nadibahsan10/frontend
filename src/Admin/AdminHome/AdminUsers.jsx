import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Avatar,
  TextField,
  CircularProgress,
} from "@mui/material";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import useFetch from "../../CustomHooks/useFetch";
import Approve from "../components/Approve";
import Reject from "../components/Reject";
import Popup from "../../Shared/Popup";

const AdminUserList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortBy, setSortBy] = useState("name");
  const { data, isLoading, isError, error, refetch } = useFetch({
    url: "http://localhost:3000/admin/getuiuusers",
    queryKey: ["getuiuusers"],
  });

  // Check for loading or error state
  if (isLoading) return <CircularProgress />;

  // Assuming data is an array of users with the required fields
  const users = data || [];

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.uiu.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort users based on selected column
  const sortedUsers = filteredUsers.sort((a, b) => {
    const aValue = a[sortBy] ? a[sortBy].toString().toLowerCase() : ""; // Ensure aValue is a string for comparison
    const bValue = b[sortBy] ? b[sortBy].toString().toLowerCase() : "";

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  // Handle sorting
  const handleSort = (column) => {
    const isSameColumn = sortBy === column;
    setSortDirection(isSameColumn && sortDirection === "asc" ? "desc" : "asc");
    setSortBy(column);
  };

  return (
    <>
      {isError && (
        <Popup
          open={isError}
          onClose={() => {
            refetch();
            if (error.response.status === 403) {
              navigate("/");
            }
          }} // Reset mutation state on close
          errorMessage={error.response.data.message}
          status={error.response.status}
        />
      )}
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          Users Approval List
        </Typography>

        {/* Search Bar */}
        <Box sx={{ marginBottom: "20px" }}>
          <TextField
            fullWidth
            label="Search Users"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell onClick={() => handleSort("profile_picture")}>
                  Profile Picture
                </TableCell>
                <TableCell onClick={() => handleSort("uiu")}>
                  University ID
                  {sortBy === "uiu" &&
                    (sortDirection === "asc" ? (
                      <ArrowUpward fontSize="small" />
                    ) : (
                      <ArrowDownward fontSize="small" />
                    ))}
                </TableCell>
                <TableCell onClick={() => handleSort("first_name")}>
                  Name
                  {sortBy === "first_name" &&
                    (sortDirection === "asc" ? (
                      <ArrowUpward fontSize="small" />
                    ) : (
                      <ArrowDownward fontSize="small" />
                    ))}
                </TableCell>
                <TableCell onClick={() => handleSort("email")}>
                  Email
                  {sortBy === "email" &&
                    (sortDirection === "asc" ? (
                      <ArrowUpward fontSize="small" />
                    ) : (
                      <ArrowDownward fontSize="small" />
                    ))}
                </TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Avatar
                      sx={{ height: 100, width: 100 }}
                      src={
                        "http://localhost:3000/" + user.profile_picture ||
                        "https://via.placeholder.com/150"
                      }
                    />
                  </TableCell>
                  <TableCell>{user.uiu}</TableCell>
                  <TableCell>{`${user.first_name} ${user.last_name}`}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Approve question={false} userId={user.id} />
                    <Reject question={false} userId={user.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default AdminUserList;
