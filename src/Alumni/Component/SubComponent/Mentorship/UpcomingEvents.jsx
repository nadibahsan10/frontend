// UpcomingEvents.js
import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const UpcomingEvents = () => {
  const events = [
    { title: 'Mentorship Workshop', date: 'October 10, 2024' },
    { title: 'Networking Event', date: 'October 20, 2024' },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Upcoming Events</Typography>
      <List>
        {events.map((event, index) => (
          <ListItem key={index}>
            <Typography variant="h6">{event.title}</Typography>
            <Typography variant="body1">Date: {event.date}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UpcomingEvents;
