import React, { useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import CircularProgress from '@mui/material/CircularProgress';
const LoadingCom = () => {
  return (
    <Dialog
      open={true}
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          overflow: 'hidden',
        },
      }}
    >
      <CircularProgress size='4rem' />
    </Dialog>
  );
};
export default LoadingCom;
