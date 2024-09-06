import React, { useState } from "react";
import InsertDriveFileSharpIcon from "@mui/icons-material/InsertDriveFileSharp";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Modal, Box } from "@mui/material";
import Button from "@mui/material/Button";
import AddPdf from "./AddPdf";
import "./UploadBar.css";

export default function UploadBar(props) {
  const [Add, setAdd] = useState(false);

  const AddOff = () => {
    setAdd(false);
  };

  const AddOn = () => {
    setAdd(true);
  };

  const handleModalClose = (event, reason) => {
    // Prevent closing on backdrop click
    if (reason !== 'backdropClick') {
      AddOff();
    }
  };

  return (
    <>
      <Modal
        open={Add}
        onClose={handleModalClose}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
            width: "60vh",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        >
          <AddPdf onClose={AddOff} fetch={props.fetch}/>

          <IconButton
            onClick={AddOff}
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: '#780000',
              '&:hover': { background: 'black' }
            }}
          >
            <CloseIcon sx={{ fontSize: 'small', color: '#ffffff' }} />
          </IconButton>

        </div>
      </Modal>
      <div className="barElement">
        <InsertDriveFileSharpIcon sx={{ fontSize: "5rem", color: "#E5252A" }} />
        <Button variant="contained" onClick={AddOn} sx={{ width: "15%" }}>
          ADD PDF
        </Button>

      </div>
    </>
  );
}
