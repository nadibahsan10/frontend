// HeroSection.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box sx={{ textAlign: 'center', p: 4, bgcolor: 'primary.main', color: 'white' }}>
      <Typography variant="h3">Connect, Grow, Succeed</Typography>
      <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
        Get Started
      </Button>
    </Box>
  );
};

export default HeroSection;
