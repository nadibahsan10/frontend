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
  border: "2px solid #f44336", // Red border for error indication
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const Popup = ({ open, onClose, errorMessage, status }) => {
  console.log(status);
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="popup-title"
      aria-describedby="popup-description"
    >
      <Box
        sx={{
          ...style,
          borderColor: status === 403 ? "warning.main" : "#f44336", // Change border color based on status
        }}
      >
        {status === 403 ? (
          <>
            <Typography
              id="popup-title"
              variant="h6"
              component="h2"
              color="orange"
            >
              Alert
            </Typography>
            <Typography id="popup-description" sx={{ mt: 2 }}>
              {errorMessage}
            </Typography>
            <Button
              onClick={onClose}
              variant="contained"
              color="orange"
              sx={{ mt: 3 }}
            >
              Close
            </Button>
          </>
        ) : (
          <>
            <Typography
              id="popup-title"
              variant="h6"
              component="h2"
              color="error"
            >
              Error
            </Typography>
            <Typography id="popup-description" sx={{ mt: 2 }}>
              {errorMessage}
            </Typography>
            <Button
              onClick={onClose}
              variant="contained"
              color="error"
              sx={{ mt: 3 }}
            >
              Close
            </Button>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default Popup;
