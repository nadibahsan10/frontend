import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useParams } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work"; // Job icon
import AddCircleIcon from "@mui/icons-material/AddCircle"; // Add job icon
import EditIcon from "@mui/icons-material/Edit"; // Edit icon
import DeleteIcon from "@mui/icons-material/Delete";
import useFetch from "../../CustomHooks/useFetch";
import { useInput } from "../../CustomHooks/useInput";
import Loading from "../../Shared/Loading";
import Success from "../../Shared/Success";
import Popup from "../../Shared/Popup";
import { useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../Auth/AuthContext";

const Work = () => {
  const auth = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [openSuccessPopup, setOpenSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { state, handleChange, reset } = useInput({
    company: { value: "", isValid: true },
    title: { value: "", isValid: true },
    year: { value: undefined, isValid: true },
  });
  const userId = useParams().userId;
  const { data, isLoading, isError, error } = useFetch({
    url: "http://localhost:3000/myprofile/getjobinfo",
    queryKey: ["getjobinfo"],
    params: { userId },
  });

  const mutation = useFetch({
    url: "http://localhost:3000/myprofile/addjob",
    method: "POST",
    params: { userId },
    data: {
      job_title: state.title.value,
      job_startdate: state.year.value,
      company: state.company.value,
    },
  });
  const mutationDelete = useFetch({
    url: "http://localhost:3000/myprofile/deletejob",
    method: "PUT",
    params: { userId },
  });

  const deleteJOB = () => {
    mutationDelete.mutate(undefined, {
      onSuccess: async (data) => {
        await queryClient.invalidateQueries(["getjobinfo"]);
        queryClient.refetchQueries(["getjobinfo"]);
        setSuccessMessage(data.message);
        setOpenSuccessPopup(true);

        reset();
      },
    });
  };
  const [open, setOpen] = useState(false);

  const handleOpenEdit = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AddWork = () => {
    mutation.mutate(undefined, {
      onSuccess: async (data) => {
        await queryClient.invalidateQueries(["getjobinfo"]);
        queryClient.refetchQueries(["getjobinfo"]);
        setSuccessMessage(data.message);
        setOpenSuccessPopup(true);

        reset();
      },
    });
  };

  if (isLoading || mutation.isPending || mutationDelete.isPending) {
    return <Loading open={true} />;
  }
  if (mutationDelete.isError) {
    console.log(mutationDelete.error);
  }
  return (
    <>
      <Success
        open={openSuccessPopup}
        onClose={() => {
          setOpenSuccessPopup(false);
          handleClose();
        }}
        successMessage={successMessage}
      />
      <Popup
        open={mutation.isError}
        onClose={() => {
          mutation.reset();
        }}
        errorMessage={mutation.error?.response.data.message}
        status={mutation.error?.response.status}
      />
      <Box
        sx={{
          padding: 4,
          bgcolor: "#f5f5f5",
          borderRadius: 2,
          maxWidth: "100%",
          margin: "auto",
        }}
      >
        <Grid item xs={12} container alignItems="center" marginBottom={2}>
          <Typography variant="h6" color="secondary">
            Current Job
          </Typography>
          <Divider
            sx={{ flexGrow: 1, marginLeft: 2, borderColor: "secondary.main" }}
          />
        </Grid>

        {/* Display current job or a button to add a job */}

        <Box>
          {data !== null ? (
            <>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <WorkIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={data.job_title}
                    secondary={data.company}
                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <AddCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Started in: ${data.job_start_date}`}
                  />
                </ListItem>
              </List>
            </>
          ) : (
            <Typography variant="body1" color="initial">
              No Job Information Provided
            </Typography>
          )}
          {auth.id === userId &&
            (data !== null ? (
              <Button
                variant="outlined"
                onClick={deleteJOB}
                color="primary"
                sx={{ marginTop: 2 }}
              >
                <DeleteIcon /> Delete
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="primary"
                onClick={handleOpenEdit}
                sx={{ marginTop: 2 }}
              >
                <EditIcon /> Add
              </Button>
            ))}
        </Box>

        {/* Job Modal */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Job</DialogTitle>
          <DialogContent>
            <TextField
              value={state.company.value}
              onChange={handleChange}
              autoFocus
              margin="dense"
              name="company"
              label="Job Position"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              value={state.title.value}
              onChange={handleChange}
              name="title"
              margin="dense"
              label="Company Name"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              value={state.year.value}
              onChange={handleChange}
              margin="dense"
              name="year"
              label="Starting Year (optional)"
              type="number"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={AddWork} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

export default Work;
