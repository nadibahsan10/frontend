import React from 'react'
import InsertDriveFileSharpIcon from '@mui/icons-material/InsertDriveFileSharp';
import Button from '@mui/material/Button';
import"./UploadBar.css"

export default function UploadBar() {
  return (
    <div className='barElement'>
      <InsertDriveFileSharpIcon sx={{ fontSize: "5rem", color: "#E5252A"}} />
      <Button variant="contained" sx={{width: "15%"}}>ADD PDF</Button>
    </div>
  )
}
