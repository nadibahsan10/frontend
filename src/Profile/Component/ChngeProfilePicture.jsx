import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton"; // Import IconButton
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon

function ChngeProfilePicture({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    position: "",
    image: null,
    imageURL: "", // Store image URL for Avatar
    status: "",
    bio: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setForm((prevForm) => ({
        ...prevForm,
        image: file,
        imageURL: URL.createObjectURL(file), // Store image URL for preview
      }));
    }
  };

  const handleRemoveImage = () => {
    setForm((prevForm) => ({
      ...prevForm,
      image: null,
      imageURL: "", // Reset the image URL
    }));
  };

  const handleSubmit = () => {
    console.log(form);
    onClose(); // Close the modal after updating
  };

  return (
    <div>
      <h2 style={{ margin: "2% 0 5% 2%" }}>Update Basic Profile</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          marginLeft: "10%",
        }}
      >
        <div
          style={{
            border: "2px dashed",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "2%",
            position: "relative", // To position the remove button
          }}
        >
          {/* Display Image in Avatar with Remove Button */}
          {form.image ? (
            <>
              <Avatar
                src={form.imageURL}
                alt="Profile Image"
                sx={{ width: 100, height: 100, margin: "5px" }}
                variant="round"
              />
              <IconButton
                onClick={handleRemoveImage}
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: '#780000',
                  '&:hover': { background: 'black' }
                }}
              >
                <CloseIcon sx={{ fontSize: 'small', color: '#ffffff' }} />
              </IconButton>
            </>
          ) : (
            <Avatar
              sx={{ width: 100, height: 100, margin: "5px" }}
              variant="round"
            />
          )}

          {/* Custom File Input */}
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="contained-button-file"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="primary"
              component="span"
              sx={{ margin: "10% 0", width: "100%" }}
            >
              Upload Image
            </Button>
          </label>
        </div>

        <TextField
          id="outlined-position"
          label="Name"
          variant="outlined"
          name="name"
          value={form.name}
          onChange={handleChange}
          style={{ marginTop: "16px" }}
        />

        <TextField
          id="outlined-email"
          label="Position"
          variant="outlined"
          name="position"
          value={form.position}
          onChange={handleChange}
          style={{ marginTop: "16px" }}
        />

        <TextField
          id="outlined-phone"
          label="Short Description of Yourself"
          variant="outlined"
          name="bio"
          value={form.bio}
          onChange={handleChange}
          style={{ marginTop: "16px" }}
          minRows={2}
          multiline
        />

        <FormControl sx={{ margin: "16px", minWidth: 120 }} size="small">
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="status-select"
            name="status"
            value={form.status}
            label="Status"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Alumni"}>Alumni</MenuItem>
            <MenuItem value={"Student"}>Student</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          sx={{ margin: "2% 0 5% 25%", width: "50%" }}
          onClick={handleSubmit}
        >
          Update
        </Button>
      </div>
    </div>
  );
}

export default ChngeProfilePicture;
