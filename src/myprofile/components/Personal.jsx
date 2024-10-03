import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  CircularProgress,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import useFetch from "../../CustomHooks/useFetch";
import Loading from "../../Shared/Loading";

const PersonalInformation = () => {
  const userId = useParams().userId;
  const { data, isLoading, isError, error } = useFetch({
    url: "http://localhost:3000/myprofile/getUserDetails",
    queryKey: ["getuserdetails"],
    params: { userId },
  });
  console.log(data);
  // State to hold personal information
  const [personalInfo, setPersonalInfo] = useState({
    phone: "+123 456 7890",
    email: "example@example.com",
    address: "123 Main St",
    gender: "Male",
    location: "City, Country",
  });

  const [open, setOpen] = useState(false); // Modal state
  const [fieldToEdit, setFieldToEdit] = useState(""); // Field being edited
  const [newValue, setNewValue] = useState(""); // New value for the field

  // Function to open the modal and set the field to edit
  const handleOpen = (field) => {
    setFieldToEdit(field);
    setNewValue(personalInfo[field]); // Set the current value for editing
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
    setFieldToEdit("");
    setNewValue("");
  };

  // Function to update personal information
  const updatePersonalInfo = () => {
    if (newValue.trim() !== "") {
      setPersonalInfo((prev) => ({
        ...prev,
        [fieldToEdit]: newValue.trim(), // Update the specific field
      }));
      handleClose(); // Close the modal after updating
    }
  };
  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ padding: 4, bgcolor: "#f5f5f5", borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Gender" secondary={data.gender} />
          <IconButton onClick={() => handleOpen("gender")}>
            <EditIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary="Phone" secondary={data.phone_number} />
          <IconButton onClick={() => handleOpen("phone")}>
            <EditIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Email" secondary={data.email} />
          <IconButton onClick={() => handleOpen("email")}>
            <EditIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Address" secondary={data.address} />
          <IconButton onClick={() => handleOpen("address")}>
            <EditIcon />
          </IconButton>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Location"
            secondary={data.city + " , " + data.country}
          />
          <IconButton onClick={() => handleOpen("location")}>
            <EditIcon />
          </IconButton>
        </ListItem>
      </List>

      {/* Edit Personal Information Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Personal Information</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label={fieldToEdit.charAt(0).toUpperCase() + fieldToEdit.slice(1)}
            type="text"
            fullWidth
            variant="outlined"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={updatePersonalInfo} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PersonalInformation;
