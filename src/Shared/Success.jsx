import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #4caf50", // Green border for success indication
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const Success = ({ open, onClose, successMessage }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="success-popup-title"
      aria-describedby="success-popup-description"
    >
      <Box sx={style}>
        <Typography
          id="success-popup-title"
          variant="h6"
          component="h2"
          color="success.main" // Change text color to green
        >
          Success
        </Typography>
        <Typography id="success-popup-description" sx={{ mt: 2 }}>
          {successMessage}
        </Typography>
        <Button
          onClick={onClose}
          variant="contained"
          color="success" // Change button color to green
          sx={{ mt: 3 }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default Success;
