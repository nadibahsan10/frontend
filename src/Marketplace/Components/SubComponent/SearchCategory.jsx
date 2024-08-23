import React from 'react';
import Button from '@mui/material/Button';

function SearchCategory(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Button variant="contained" 
      sx={{ height: '25vh', width: '80%', backgroundColor: '#EDF2F4',
        '&:hover': {
      backgroundColor: '#8D99AE40', 
      transform: 'scale(1.05)',    
      transition: 'all 0.3s ease' 
    }
      }}>
        <img src={props.icon} alt="Category" style={{ maxHeight: '50%', maxWidth: '50%' }} />
      </Button>
      <p style={{textAlign: 'center',marginTop: '5px',fontSize: '1.2rem',color: 'black'}}>{props.name}</p>
    </div>
  );
}

export default SearchCategory;
