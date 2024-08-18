import React from 'react';
import "./FilterElement.css";
import Checkbox from '@mui/material/Checkbox';

export default function FilterElement(props) {
  return (
    <div className='checkBox'>
      <Checkbox />
      <span>{props.dept}</span>
    </div>
  )
}
