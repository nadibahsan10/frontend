import React, { useState } from 'react';
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  DialogActions,
} from '@mui/material';
import EventList from './EventList';
import EventForm from './EventForm';



// Main EventCalendar component to manage state and integrate form and list
const EventCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Tech Career Bootcamp',
      date: '2024-10-15',
      time: '10:00 AM',
      description: 'Join our intensive bootcamp to learn in-demand tech skills and prepare for a successful career.',
      location: 'UIU Auditorium',
      speaker: 'John Doe',
      image: 'https://media.istockphoto.com/id/1473041412/vector/user-interface-ui-and-user-experience-ux-design-interface-construction-mobile-application.jpg?s=170667a&w=0&k=20&c=-k8JOUjHgLiqhlAlDE3jOxUNrFbWl25auTwbwQU2MaY=',
    },
    {
      title: 'AI & Machine Learning Seminar',
      date: '2024-11-05',
      time: '2:00 PM',
      description: 'Explore the latest advancements in AI and machine learning with industry experts.',
      location: 'Room 301',
      speaker: 'Jane Smith',
      image: 'https://d33wubrfki0l68.cloudfront.net/53d05c54a7b09bd4249b9951579e174a46c758a5/edb2c/en/blog/difference-between-ux-ui-ux-ui-min-6cd3a171087987d31ecdb67ad67c0ab8136242f7b4e476a0e509017aa8bbc755.png',
    },
    {
      title: 'Tech Career Bootcamp',
      date: '2024-10-15',
      time: '10:00 AM',
      description: 'Join our intensive bootcamp to learn in-demand tech skills and prepare for a successful career.',
      location: 'UIU Auditorium',
      speaker: 'John Doe',
      image: 'https://ce.uiu.ac.bd/wp-content/uploads/sites/7/2023/12/Recent-development-CE-Digital-banner-1024x576-1.png',
    },
    {
      title: 'AI & Machine Learning Seminar',
      date: '2024-11-05',
      time: '2:00 PM',
      description: 'Explore the latest advancements in AI and machine learning with industry experts.',
      location: 'Room 301',
      speaker: 'Jane Smith',
      image: 'https://th.bing.com/th/id/OIP.jo0v-XJgTHfYKp555DnUHAHaD3?rs=1&pid=ImgDetMain',
    },
  ]);

  const [formOpen, setFormOpen] = useState(false);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <Box sx={{ flex: 1, overflowY: 'auto' }}>
      <EventList events={events} />
    </Box>
    <Box sx={{ position: 'absolute', top: 70, right: 40, p: 2, backgroundColor: 'white', display: 'flex', justifyContent: 'flex-end' }}>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => setFormOpen(true)} 
      >
        Add Event
      </Button>
    </Box>
    <EventForm addEvent={addEvent} open={formOpen} handleClose={() => setFormOpen(false)} />
  </Box>
  );
};

export default EventCalendar;
