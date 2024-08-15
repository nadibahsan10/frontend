import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #780000",
  boxShadow: 24,
  p: 4,
};

export default function ErrorModal(props) {
  return (
    <Modal
      open={true}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {props.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.message}
          </Typography>
          <br />
          <br />
          <Button
            variant="contained"
            sx={{ position: "absolute", bottom: "20px", right: "30px" }}
            onClick={props.handleClose}
          >
            Close
          </Button>
        </Box>
      </div>
    </Modal>
  );
}
