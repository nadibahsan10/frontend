// HowItWorks.js
import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const HowItWorks = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">How It Works</Typography>
      <Typography variant="h6">For Mentees</Typography>
      <List>
        <ListItem>Create a profile</ListItem>
        <ListItem>Browse mentors</ListItem>
        <ListItem>Request mentorship</ListItem>
      </List>
      <Typography variant="h6">For Mentors</Typography>
      <List>
        <ListItem>Create a profile</ListItem>
        <ListItem>Set availability</ListItem>
        <ListItem>Connect with mentees</ListItem>
      </List>
    </Box>
  );
};

export default HowItWorks;
