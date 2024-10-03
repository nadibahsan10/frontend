import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
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
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School"; // Icon for degree entries
import GroupIcon from "@mui/icons-material/Group"; // Icon for club entries
import DeleteIcon from "@mui/icons-material/Delete"; // Delete icon

// Sample data for degrees and club memberships
const initialDegreeData = [
  {
    degree_id: 1,
    uid: 101,
    degree_name: "Bachelor of Science in Computer Science",
    institution: "United International University",
    start: "2019",
    end: "2023",
  },
  {
    degree_id: 2,
    uid: 102,
    degree_name: "Bachelor of Arts in Design",
    institution: "Design Academy",
    start: "2018",
    end: "2022",
  },
];

const initialClubData = [
  {
    club_id: 1,
    uid: 101,
    club_name: "Tech Club",
    position: "Member",
    start_date: "January 2020",
    end_date: "Present",
  },
  {
    club_id: 2,
    uid: 102,
    club_name: "Art Society",
    position: "Vice President",
    start_date: "June 2021",
    end_date: "June 2023",
  },
];

const EducationAndClubs = () => {
  const [degreeData, setDegreeData] = useState(initialDegreeData);
  const [clubData, setClubData] = useState(initialClubData);

  // Modal state for degrees
  const [openDegreeModal, setOpenDegreeModal] = useState(false);
  const [newDegree, setNewDegree] = useState({
    degree_name: "",
    institution: "",
    start: "",
    end: "",
  });

  // Modal state for clubs
  const [openClubModal, setOpenClubModal] = useState(false);
  const [newClub, setNewClub] = useState({
    club_name: "",
    position: "",
    start_date: "",
    end_date: "",
  });

  // Functions to open and close the degree modal
  const handleOpenDegreeModal = () => setOpenDegreeModal(true);
  const handleCloseDegreeModal = () => setOpenDegreeModal(false);

  // Function to add a new degree
  const addDegree = () => {
    setDegreeData([
      ...degreeData,
      { ...newDegree, degree_id: degreeData.length + 1, uid: 101 }, // Update uid as needed
    ]);
    setNewDegree({ degree_name: "", institution: "", start: "", end: "" });
    handleCloseDegreeModal();
  };

  // Functions to open and close the club modal
  const handleOpenClubModal = () => setOpenClubModal(true);
  const handleCloseClubModal = () => setOpenClubModal(false);

  // Function to add a new club
  const addClub = () => {
    setClubData([
      ...clubData,
      { ...newClub, club_id: clubData.length + 1, uid: 101 }, // Update uid as needed
    ]);
    setNewClub({ club_name: "", position: "", start_date: "", end_date: "" });
    handleCloseClubModal();
  };

  // Function to delete a degree
  const deleteDegree = (degree_id) => {
    setDegreeData(
      degreeData.filter((degree) => degree.degree_id !== degree_id)
    );
  };

  // Function to delete a club
  const deleteClub = (club_id) => {
    setClubData(clubData.filter((club) => club.club_id !== club_id));
  };

  return (
    <Box sx={{ p: 3, borderRadius: 2, bgcolor: "#f5f5f5" }}>
      {/* Degrees Section */}
      <Typography variant="h5" gutterBottom>
        Degrees
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenDegreeModal}
      >
        Add Degree
      </Button>
      <List>
        {degreeData.map((degree) => (
          <ListItem key={degree.degree_id} sx={{ mb: 2 }}>
            <ListItemIcon>
              <SchoolIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="h6">{degree.degree_name}</Typography>
              }
              secondary={
                <Typography variant="body2" color="text.secondary">
                  {degree.institution} | {degree.start} - {degree.end}
                </Typography>
              }
            />
            <IconButton
              onClick={() => deleteDegree(degree.degree_id)}
              color="secondary"
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Clubs Section */}
      <Typography variant="h5" gutterBottom>
        Clubs
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpenClubModal}>
        Add Club
      </Button>
      <List>
        {clubData.map((club) => (
          <ListItem key={club.club_id} sx={{ mb: 2 }}>
            <ListItemIcon>
              <GroupIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h6">{club.club_name}</Typography>}
              secondary={
                <Typography variant="body2" color="text.secondary">
                  {club.position} | {club.start_date} - {club.end_date}
                </Typography>
              }
            />
            <IconButton
              onClick={() => deleteClub(club.club_id)}
              color="secondary"
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      {/* Degree Modal */}
      <Dialog open={openDegreeModal} onClose={handleCloseDegreeModal}>
        <DialogTitle>Add Degree</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Degree Name"
            fullWidth
            variant="outlined"
            value={newDegree.degree_name}
            onChange={(e) =>
              setNewDegree({ ...newDegree, degree_name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Institution"
            fullWidth
            variant="outlined"
            value={newDegree.institution}
            onChange={(e) =>
              setNewDegree({ ...newDegree, institution: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Start Year"
            fullWidth
            variant="outlined"
            value={newDegree.start}
            onChange={(e) =>
              setNewDegree({ ...newDegree, start: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="End Year"
            fullWidth
            variant="outlined"
            value={newDegree.end}
            onChange={(e) =>
              setNewDegree({ ...newDegree, end: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDegreeModal} color="primary">
            Cancel
          </Button>
          <Button onClick={addDegree} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Club Modal */}
      <Dialog open={openClubModal} onClose={handleCloseClubModal}>
        <DialogTitle>Add Club</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Club Name"
            fullWidth
            variant="outlined"
            value={newClub.club_name}
            onChange={(e) =>
              setNewClub({ ...newClub, club_name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Position"
            fullWidth
            variant="outlined"
            value={newClub.position}
            onChange={(e) =>
              setNewClub({ ...newClub, position: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Start Date"
            fullWidth
            variant="outlined"
            value={newClub.start_date}
            onChange={(e) =>
              setNewClub({ ...newClub, start_date: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="End Date"
            fullWidth
            variant="outlined"
            value={newClub.end_date}
            onChange={(e) =>
              setNewClub({ ...newClub, end_date: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseClubModal} color="primary">
            Cancel
          </Button>
          <Button onClick={addClub} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EducationAndClubs;
