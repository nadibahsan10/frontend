import React, { useState } from "react";
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
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DeleteIcon from "@mui/icons-material/Delete";

const SocialMedia = () => {
  const [socialMedias, setSocialMedias] = useState([
    { type: "Facebook", url: "facebook.com/example" },
    { type: "Twitter", url: "@example" },
    { type: "LinkedIn", url: "linkedin.com/in/example" },
  ]);
  const [open, setOpen] = useState(false);
  const [newMediaType, setNewMediaType] = useState("");
  const [newMediaUrl, setNewMediaUrl] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewMediaType("");
    setNewMediaUrl("");
  };

  const addSocialMedia = () => {
    if (newMediaType.trim() && newMediaUrl.trim()) {
      setSocialMedias((prev) => [
        ...prev,
        { type: newMediaType.trim(), url: newMediaUrl.trim() },
      ]);
      handleClose();
    }
  };

  const deleteSocialMedia = (index) => {
    setSocialMedias((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ padding: 4, bgcolor: "#f5f5f5", borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Social Media
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Social Media
      </Button>
      <List>
        {socialMedias.map((media, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {media.type === "Facebook" && <FacebookIcon />}
              {media.type === "Twitter" && <TwitterIcon />}
              {media.type === "LinkedIn" && <LinkedInIcon />}
              {media.type === "Instagram" && <InstagramIcon />}
              {media.type === "WhatsApp" && <WhatsAppIcon />}
            </ListItemIcon>
            <ListItemText primary={media.type} secondary={media.url} />
            <IconButton onClick={() => deleteSocialMedia(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      {/* Add Social Media Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Social Media</DialogTitle>
        <DialogContent>
          <Select
            fullWidth
            value={newMediaType}
            onChange={(e) => setNewMediaType(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              Select Media Type
            </MenuItem>
            <MenuItem value="Facebook">Facebook</MenuItem>
            <MenuItem value="Instagram">Instagram</MenuItem>
            <MenuItem value="Twitter">Twitter</MenuItem>
            <MenuItem value="LinkedIn">LinkedIn</MenuItem>
            <MenuItem value="WhatsApp">WhatsApp</MenuItem>
            {/* Add more media types as needed */}
          </Select>
          <TextField
            margin="dense"
            label="URL"
            type="text"
            fullWidth
            variant="outlined"
            value={newMediaUrl}
            onChange={(e) => setNewMediaUrl(e.target.value)}
            sx={{ marginTop: 2 }} // Add some spacing
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addSocialMedia} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SocialMedia;
