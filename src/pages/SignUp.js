import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SignUpForm from '../components/sign-up/SignUpForm';

const SignUp = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Grid spacing={3} container>
        <Grid xs={0} item sm={6}>
          <Box
            sx={{
              background: '#2A5DC6',
              minHeight: { xs: '0', sm: '100vh' },
              height: { xs: '0', sm: '100%' },
            }}
          />
        </Grid>
        <Grid xs={12} item sm={6}>
          <SignUpForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
