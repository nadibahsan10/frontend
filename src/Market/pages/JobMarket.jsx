import React, { useState } from "react";
import { styled } from "@mui/system";
import { Box, Grid, Paper, TextField, Button, Typography } from "@mui/material";
import JobSortCategory from "../Component/JobSortCategory";
import JobList from "../Component/JobList";
import IndividualJobDescription from "../Component/IndividualJobDescription";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function JobMarket() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  return (
    <>
      <Box component="section" sx={{ p: 0 }}>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
              JOB MARKET
            </Typography>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={3}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Title, Skill or Company"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Location"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={1}>
            <Button fullWidth variant="contained" sx={{ height: "56px" }}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box  sx={{
        width: '90%',       
        margin: '0 auto',     
      }}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            
          </Grid>
          <Grid item xs={7}>
            <JobSortCategory />
          </Grid>
        </Grid>
      </Box>

      <Box component="section" sx={{ p: 2 }}>
        <Grid container spacing={2} sx={{ height: "70vh", overflow: "hidden" }}>
          <Grid item xs={1}></Grid>

          <Grid item xs={4} sx={{ overflow: "auto", maxHeight: "100%" }}>
            <JobList onSelectJob={handleJobSelect} />
          </Grid>

          <Grid item xs={6} sx={{ overflow: "auto", maxHeight: "100%" }}>
            <IndividualJobDescription job={selectedJob} />
          </Grid>

          <Grid item xs={1}></Grid>
        </Grid>
      </Box>
    </>
  );
}

export default JobMarket;
