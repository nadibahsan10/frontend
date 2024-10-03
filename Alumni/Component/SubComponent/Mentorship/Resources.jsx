// Resources.js
import React from 'react';
import { Box, Typography, List, ListItem, Link } from '@mui/material';

const Resources = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Helpful Resources</Typography>
      <List>
        <ListItem>
          <Link href="#" color="primary">Mentorship Agreement Template</Link>
        </ListItem>
        <ListItem>
          <Link href="#" color="primary">Goal-Setting Guide</Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Resources;
