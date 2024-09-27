import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function JobSortCategory() {
  const [dropdownValues, setDropdownValues] = React.useState(Array(6).fill(''));

  const handleChange = (index, event) => {
    const newValues = [...dropdownValues];
    newValues[index] = event.target.value;
    setDropdownValues(newValues);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {Array.from({ length: 7 }, (_, index) => (
          <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
            <FormControl fullWidth>
              <InputLabel id={`dropdown-label-${index}`}>Dropdown {index + 1}</InputLabel>
              <Select
                labelId={`dropdown-label-${index}`}
                id={`dropdown-${index}`}
                value={dropdownValues[index]}
                label={`Dropdown ${index + 1}`}
                onChange={(event) => handleChange(index, event)}
              >
                <MenuItem value={10}>Option 1</MenuItem>
                <MenuItem value={20}>Option 2</MenuItem>
                <MenuItem value={30}>Option 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default JobSortCategory;
