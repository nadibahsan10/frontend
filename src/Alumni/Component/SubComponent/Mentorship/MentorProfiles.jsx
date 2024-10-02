// MentorProfiles.js
import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const MentorProfiles = () => {
  const mentors = [
    { name: 'John Doe', expertise: 'Software Engineering' },
    { name: 'Jane Smith', expertise: 'Business Management' },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Featured Mentors</Typography>
      <List>
        {mentors.map((mentor, index) => (
          <ListItem key={index}>
            <Typography variant="h6">{mentor.name}</Typography>
            <Typography variant="body1">Expertise: {mentor.expertise}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MentorProfiles;
