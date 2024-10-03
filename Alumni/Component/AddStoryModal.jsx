import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid',
  borderColor: 'primary.main',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const AddStoryModal = ({ open, handleClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStory = { title, description, imageUrl };
    onSubmit(newStory); // Call the function passed as a prop
    handleClose(); // Close the modal after submission
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Add Your Success Story
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <TextField
            label="Image URL"
            variant="outlined"
            fullWidth
            margin="normal"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddStoryModal;
