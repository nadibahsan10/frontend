import React from 'react'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import './SearchBar.css'
export default function () {
  return (
    <div className='searchBar'>
        <TextField id="outlined-basic" label={<SearchIcon/>} variant="outlined" sx={{backgroundColor: "transparent"}}/>
        <Button variant="contained">Search</Button>
    </div>
  )
}
