import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vh',
  background: 'white',
  borderRadius: '4px',
};

function ModalFram({ open, onClose, children }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      disableBackdropClick
      BackdropProps={{ onClick: (e) => e.stopPropagation() }} 
    >
      <Box sx={modalStyle}>
        <IconButton
          onClick={onClose}
          sx={{
            backgroundColor: '#780000',
            position: 'absolute',
            top: 5,
            right: 5,
            '&:hover': { background: 'black' },
          }}
        >
          <CloseIcon sx={{ fontSize: 'small', color: '#ffffff' }} />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
}

export default ModalFram;
