import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoginForm from '../components/login/LoginForm';
import loginLogo from '../assets/images/login.svg';

const Login = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Grid spacing={3} container>
        <Grid xs={0} item sm={6}>
          <Box
            sx={{
              background: '#2A5DC6',
              minHeight: { xs: '0', sm: '100vh' },
              height: { xs: '0', sm: '100%' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <img src={loginLogo} alt='login' width='70%' />
          </Box>
        </Grid>
        <Grid xs={12} item sm={6}>
          <LoginForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
