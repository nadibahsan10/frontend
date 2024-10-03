// EventCalendar.jsx
import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  DialogActions,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Component to display the list of events
const EventList = ({ events }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleOpen = (event) => {
    setSelectedImage(event.image);
    setSelectedTitle(event.title);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
    setSelectedTitle("");
  };

  const handleInterested = (title) => {
    alert(`You are interested in: ${title}`); // Change this to your desired action
  };

  return (
    <Box>
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        sx={{
          textAlign: "center", 
          textDecoration: "underline", 
          marginTop: 4,
          marginBottom: 2,
          color: 'primary.main'
        }}
      >
        Upcoming Events & Seminars
      </Typography>
      {events.length === 0 ? (
        <Typography variant="body1">No events posted yet.</Typography>
      ) : (
        <Grid container spacing={2}>
          {events.map((event, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{event.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(event.date).toLocaleDateString()} at {event.time}
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      mb: 2,
                      cursor: "pointer",
                      height: 150,
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={({}) => handleOpen(event)}
                  >
                    <img
                      src={event.image}
                      alt={`${event.title}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                  <Typography variant="body1">{event.description}</Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    <strong>Location:</strong> {event.location}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    <strong>Speaker:</strong> {event.speaker}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<FavoriteIcon />}
                    onClick={() => handleInterested(event.title)} // Handle interested action
                    sx={{ mt: 2 }}
                  >
                    Interested
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Modal for displaying the image */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        sx={{
          "& .MuiDialog-paper": {
            minHeight: "80%", // Set minimum width
            minWidth: "80%", // Set maximum width
          },
        }}
      >
        <DialogTitle>
          {selectedTitle}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <img
            src={selectedImage}
            alt="Event"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              objectFit: "cover", // Correct property for covering the content
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};
export default EventList;
