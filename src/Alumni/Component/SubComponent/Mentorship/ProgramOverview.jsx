// ProgramOverview.js
import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const ProgramOverview = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Program Overview</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Join our mentorship program to connect with experienced alumni who can guide you in your academic and professional journey.
      </Typography>
      <List>
        <ListItem>Mentor Matching</ListItem>
        <ListItem>Workshops and Webinars</ListItem>
        <ListItem>Networking Events</ListItem>
      </List>
    </Box>
  );
};

export default ProgramOverview;
