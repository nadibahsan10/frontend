import React, { useState } from "react";
import InsertDriveFileSharpIcon from "@mui/icons-material/InsertDriveFileSharp";

import { Modal, Box } from "@mui/material";
import Button from "@mui/material/Button";
import AddPdf from "./AddPdf";
import "./UploadBar.css";

export default function UploadBar() {
  const [Add, setAdd] = useState(false);
  const AddOff = () => {
    setAdd(false);
  };
  const AddOn = () => {
    setAdd(true);
  };

  return (
    <>
      <Modal open={Add} onClose={AddOff}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
            height: "60vh",
            width: "60vh",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        >
          <AddPdf />
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
