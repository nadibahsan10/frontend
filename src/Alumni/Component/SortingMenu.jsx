import React from 'react';
import { Button, ButtonGroup, Popover, MenuItem, Menu } from '@mui/material';

const SortingMenu = ({ onAddEvent, onMyListings, onSavedEvents }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ButtonGroup variant="contained" aria-label="outlined button group" sx={{ marginBottom: 2 }}>
        <Button onClick={handleMenuOpen}>Sort Events</Button>
      </ButtonGroup>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Menu>
          <MenuItem onClick={onAddEvent}>Add Event/Seminar</MenuItem>
          <MenuItem onClick={onMyListings}>My Listings</MenuItem>
          <MenuItem onClick={onSavedEvents}>Saved Events</MenuItem>
        </Menu>
      </Popover>
    </>
  );
};

export default SortingMenu;
