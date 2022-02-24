import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo from '../../../../assets/images/logo.png';

const Logo = () => {
  return (
    <Stack spacing={2} direction='row' alignItems='center'>
      <img width={48} height={48} src={logo} alt={logo} />
      <Typography color='#999' fontWeight={700} variant='h5'>
        PetShop
      </Typography>
    </Stack>
  );
};

export default Logo;
