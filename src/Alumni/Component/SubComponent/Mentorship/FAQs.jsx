// FAQs.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const FAQs = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Frequently Asked Questions</Typography>
      <Typography variant="h6">How do I become a mentor?</Typography>
      <Typography variant="body1">Fill out the mentor application form on our website.</Typography>
      <Typography variant="h6">Can I change my mentor?</Typography>
      <Typography variant="body1">Yes, you can request a new mentor after completing a feedback form.</Typography>
    </Box>
  );
};

export default FAQs;
