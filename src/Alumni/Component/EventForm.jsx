import React, { useState, useRef } from 'react';
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { CloudUpload, Close as CloseIcon } from '@mui/icons-material';

// Component to display the form for alumni to post an event
const EventForm = ({ open, handleClose }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [speaker, setSpeaker] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const imageInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the image
    }
  };

  const handleDiscardImage = () => {
    setImage(null);
    setImagePreview(null);
    imageInputRef.current.value = ''; // Clear the file input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && date && time && description && location && speaker && image) {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('date', date);
      formData.append('time', time);
      formData.append('description', description);
      formData.append('location', location);
      formData.append('speaker', speaker);
      formData.append('image', image); // Append the file to form data
      
      // Here you would typically send formData to your server
      console.log('Event Data:', formData);

      // Reset form fields
      resetForm();
      handleClose(); // Close the dialog after submitting
    }
  };

  const resetForm = () => {
    setTitle('');
    setDate('');
    setTime('');
    setDescription('');
    setLocation('');
    setSpeaker('');
    handleDiscardImage(); // Reset the image
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>
        Post a Seminar/Event
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField 
                label="Event Title" 
                variant="outlined" 
                fullWidth 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Date" 
                type="date" 
                variant="outlined" 
                fullWidth 
                InputLabelProps={{ shrink: true }} 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                required 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Time" 
                type="time" 
                variant="outlined" 
                fullWidth 
                InputLabelProps={{ shrink: true }} 
                inputProps={{ step: 300 }} // 5 min steps
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
                required 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Location" 
                variant="outlined" 
                fullWidth 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                required 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Speaker" 
                variant="outlined" 
                fullWidth 
                value={speaker} 
                onChange={(e) => setSpeaker(e.target.value)} 
                required 
              />
            </Grid>
            <Grid item xs={12}>
              <input 
                type="file" 
                accept="image/*" 
                ref={imageInputRef} 
                onChange={handleImageChange} 
                style={{ display: 'none' }} 
              />
              <label htmlFor="image-upload">
                <IconButton 
                  component="span" 
                  onClick={() => imageInputRef.current.click()} 
                  color="primary"
                >
                  <CloudUpload />
                </IconButton>
                {image ? (
                  <div>
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      style={{ width: '100%', height: 'auto', marginTop: '10px' }} 
                    />
                    <Button variant="outlined" color="secondary" onClick={handleDiscardImage}>
                      Discard
                    </Button>
                  </div>
                ) : (
                  <Typography variant="body2" style={{ marginTop: '10px' }}>
                    Click to upload an image
                  </Typography>
                )}
              </label>
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Description" 
                variant="outlined" 
                fullWidth 
                multiline 
                rows={4} 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                required 
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit" color="primary" fullWidth>
                Post Event
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EventForm;
