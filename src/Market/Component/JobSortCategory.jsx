import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

function JobSortCategory() {
  const [dropdownValues, setDropdownValues] = React.useState({
    datePosted: '',
    jobType: '',
    experienceLevel: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDropdownValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setDropdownValues({
      datePosted: '',
      jobType: '',
      experienceLevel: '',
    });
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <FormControl fullWidth>
            <InputLabel id="date-posted-label">Date Posted</InputLabel>
            <Select
              labelId="date-posted-label"
              id="date-posted"
              name="datePosted"
              value={dropdownValues.datePosted}
              label="Date Posted"
              onChange={handleChange}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="last24hours">Last 24 hours</MenuItem>
              <MenuItem value="last3days">Last 3 days</MenuItem>
              <MenuItem value="last7days">Last 7 days</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <FormControl fullWidth>
            <InputLabel id="job-type-label">Job Type</InputLabel>
            <Select
              labelId="job-type-label"
              id="job-type"
              name="jobType"
              value={dropdownValues.jobType}
              label="Job Type"
              onChange={handleChange}
              
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="fullTime">Full-time</MenuItem>
              <MenuItem value="partTime">Part-time</MenuItem>
              <MenuItem value="contract">Contract</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={4}>
          <FormControl fullWidth>
            <InputLabel id="experience-level-label">Experience Level</InputLabel>
            <Select
              labelId="experience-level-label"
              id="experience-level"
              name="experienceLevel"
              value={dropdownValues.experienceLevel}
              label="Experience Level"
              onChange={handleChange}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="entryLevel">Entry Level</MenuItem>
              <MenuItem value="midLevel">Mid Level</MenuItem>
              <MenuItem value="seniorLevel">Senior Level</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Button variant="contained" onClick={handleReset} sx={{padding: '14px'}}>Reset</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default JobSortCategory;
