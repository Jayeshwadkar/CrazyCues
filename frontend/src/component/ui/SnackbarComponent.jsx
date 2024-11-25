import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Slide from '@mui/material/Slide';

function CustomSnackbar({ open, message, onClose, color }) {
  let snackbarColor = 'green';

  if (color === 'error') {
    snackbarColor = 'red';
  } else if (color === 'warning') {
    snackbarColor = 'orange';
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      TransitionComponent={Slide}
      transitionDuration={600}
    >
      <SnackbarContent message={message} style={{ backgroundColor: snackbarColor }} />
    </Snackbar>
  );
}

export default CustomSnackbar;
