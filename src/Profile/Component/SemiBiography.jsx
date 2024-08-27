import React from 'react';
import { Avatar } from '@mui/material';
import './SemiBiography.css';

function SemiBiography() {
  return (
    <div 
    style={{
        display: "flex",
        alignItems: "center"
    }}>
       <Avatar 
        sx={{ height: 100, width: 100, marginRight: "10px" }}
        alt="Remy Sharp"
        src="/profileImage.webp"/>

        <div className='aboutShort'>
            <h3>Mohiuddin Mohammad Sadik</h3>
            <p>Senior Software Architecture at Microsoft</p>
            <p><span style={{fontWeight: "bold", color: "black"}}>Status:</span> <span>Alumni</span></p>

        </div>
    </div>
  )
}

export default SemiBiography