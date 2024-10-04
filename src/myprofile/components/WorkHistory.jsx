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
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work"; // Icon for job entries
import SchoolIcon from "@mui/icons-material/School"; // Icon for internship entries
import RemoveIcon from "@mui/icons-material/Remove"; // Icon for remove action
import AddIcon from "@mui/icons-material/Add"; // Icon for add action
import DeleteIcon from "@mui/icons-material/Delete"; // Icon for individual remove action

// Sample data for internships and job histories
const initialInternshipData = [
  {
    internship_id: 1,
    uid: 101,
    company_name: "Tech Corp",
    position: "Software Intern",
    start: "June 2023",
    end: "August 2023",
  },
  {
    internship_id: 2,
    uid: 102,
    company_name: "Design Studio",
    position: "Design Intern",
    start: "January 2023",
    end: "May 2023",
  },
];

const initialJobHistoryData = [
  {
    history_id: 1,
    uid: 101,
    job_title: "Junior Developer",
    company: "Web Solutions",
    start_date: "September 2023",
    end_date: "Present",
    reason_for_leaving: "N/A",
  },
  {
    history_id: 2,
    uid: 102,
    job_title: "Freelance Designer",
    company: "Creative Hub",
    start_date: "June 2022",
    end_date: "December 2022",
    reason_for_leaving: "Completed project",
  },
];

const WorkHistory = () => {
  const [internshipData, setInternshipData] = useState(initialInternshipData);
  const [jobHistoryData, setJobHistoryData] = useState(initialJobHistoryData);

  // State for modals
  const [openInternshipModal, setOpenInternshipModal] = useState(false);
  const [openJobModal, setOpenJobModal] = useState(false);

  // State for new entry forms
  const [newInternship, setNewInternship] = useState({
    company_name: "",
    position: "",
    start: "",
    end: "",
  });

  const [newJob, setNewJob] = useState({
    job_title: "",
    company: "",
    start_date: "",
    end_date: "",
    reason_for_leaving: "",
  });

  // Function to open internship modal
  const handleOpenInternshipModal = () => {
    setOpenInternshipModal(true);
  };

  // Function to close internship modal
  const handleCloseInternshipModal = () => {
    setOpenInternshipModal(false);
  };

  // Function to open job modal
  const handleOpenJobModal = () => {
    setOpenJobModal(true);
  };

  // Function to close job modal
  const handleCloseJobModal = () => {
    setOpenJobModal(false);
  };

  // Function to add an internship
  const addInternship = () => {
    const newInternshipData = {
      internship_id: internshipData.length + 1,
      uid: 101,
      ...newInternship,
    };
    setInternshipData([...internshipData, newInternshipData]);
    handleCloseInternshipModal(); // Close modal after adding
    setNewInternship({ company_name: "", position: "", start: "", end: "" }); // Reset form
  };

  // Function to remove an individual internship
  const removeInternship = (id) => {
    setInternshipData(
      internshipData.filter((internship) => internship.internship_id !== id)
    );
  };

  // Function to add a job history entry
  const addJobHistory = () => {
    const newJobData = {
      history_id: jobHistoryData.length + 1,
      uid: 101,
      ...newJob,
    };
    setJobHistoryData([...jobHistoryData, newJobData]);
    handleCloseJobModal(); // Close modal after adding
    setNewJob({
      job_title: "",
      company: "",
      start_date: "",
      end_date: "",
      reason_for_leaving: "",
    }); // Reset form
  };

  // Function to remove an individual job history entry
  const removeJobHistory = (id) => {
    setJobHistoryData(jobHistoryData.filter((job) => job.history_id !== id));
  };

  return (
    <Box sx={{ p: 3, borderRadius: 2, bgcolor: "#f5f5f5" }}>
      {/* Internships Section */}
      <Typography variant="h5" gutterBottom>
        Internships
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleOpenInternshipModal}
        sx={{ mb: 2 }}
      >
        Add Internship
      </Button>
      <List>
        {internshipData.map((internship) => (
          <ListItem key={internship.internship_id} sx={{ mb: 2 }}>
            <ListItemIcon>
              <SchoolIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="h6">{internship.position}</Typography>
              }
              secondary={
                <Typography variant="body2" color="text.secondary">
                  {internship.company_name} | {internship.start} -{" "}
                  {internship.end}
                </Typography>
              }
            />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => removeInternship(internship.internship_id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Job History Section */}
      <Typography variant="h5" gutterBottom>
        Job History
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleOpenJobModal}
        sx={{ mb: 2 }}
      >
        Add Job History
      </Button>
      <List>
        {jobHistoryData.map((job) => (
          <ListItem key={job.history_id} sx={{ mb: 2 }}>
            <ListItemIcon>
              <WorkIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h6">{job.job_title}</Typography>}
              secondary={
                <Typography variant="body2" color="text.secondary">
                  {job.company} | {job.start_date} - {job.end_date}
                  {job.reason_for_leaving && ` (${job.reason_for_leaving})`}
                </Typography>
              }
            />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => removeJobHistory(job.history_id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      {/* Modal for Adding Internship */}
      <Dialog open={openInternshipModal} onClose={handleCloseInternshipModal}>
        <DialogTitle>Add Internship</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the details of the internship.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Company Name"
            fullWidth
            variant="outlined"
            value={newInternship.company_name}
            onChange={(e) =>
              setNewInternship({
                ...newInternship,
                company_name: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            label="Position"
            fullWidth
            variant="outlined"
            value={newInternship.position}
            onChange={(e) =>
              setNewInternship({ ...newInternship, position: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Start Date"
            fullWidth
            type="date"
            variant="outlined"
            value={newInternship.start}
            onChange={(e) =>
              setNewInternship({ ...newInternship, start: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="End Date"
            fullWidth
            variant="outlined"
            value={newInternship.end}
            onChange={(e) =>
              setNewInternship({ ...newInternship, end: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseInternshipModal} color="primary">
            Cancel
          </Button>
          <Button onClick={addInternship} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal for Adding Job History */}
      <Dialog open={openJobModal} onClose={handleCloseJobModal}>
        <DialogTitle>Add Job History</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the details of the job.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Job Title"
            fullWidth
            variant="outlined"
            value={newJob.job_title}
            onChange={(e) =>
              setNewJob({ ...newJob, job_title: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Company"
            fullWidth
            variant="outlined"
            value={newJob.company}
            onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Start Date"
            fullWidth
            variant="outlined"
            value={newJob.start_date}
            onChange={(e) =>
              setNewJob({ ...newJob, start_date: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="End Date"
            fullWidth
            variant="outlined"
            value={newJob.end_date}
            onChange={(e) => setNewJob({ ...newJob, end_date: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Reason for Leaving"
            fullWidth
            variant="outlined"
            value={newJob.reason_for_leaving}
            onChange={(e) =>
              setNewJob({ ...newJob, reason_for_leaving: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseJobModal} color="primary">
            Cancel
          </Button>
          <Button onClick={addJobHistory} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default WorkHistory;
