import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { blue } from '@mui/material/colors';
import { Google } from '@mui/icons-material';

const Footer = () => {
  return (
    <section style={{ backgroundColor: 'rgb(12, 14, 48)' }}>
      <Container sx={{ py: 5 }} maxWidth='lg'>
        <Grid spacing={2} container>
          <Grid item sm={12} md={6}>
            <Stack spacing={2}>
              <Typography
                variant='h1'
                fontWeight='700'
                fontSize='40px'
                color='white'
              >
                Pet Shop
              </Typography>
              <Typography variant='body2' color='#E3E9EF'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur illo, voluptates fugiat debitis maxime cupiditate
                accusantium, velit ipsa tempore, enim voluptate modi explicabo
                cum libero provident! Repudiandae atque non nemo.{' '}
              </Typography>
              <Stack spacing={2} direction='row'>
                <a
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  href='#'
                >
                  <Stack
                    sx={{
                      backgroundColor: '#0C2A4D',
                      padding: '10px 16px',
                      borderRadius: 1,
                    }}
                    spacing={1}
                    alignItems='center'
                    direction='row'
                  >
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/1216/1216729.png'
                      width='24px'
                      height='24px'
                      alt=''
                    />
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: '8px',
                          fontWeight: '600',
                          lineHeight: '1',
                        }}
                        color='white'
                      >
                        Get it on
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          fontWeight: '900',
                        }}
                        color='white'
                      >
                        Google play
                      </Typography>
                    </Stack>
                  </Stack>
                </a>
                <a
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  href='#'
                >
                  <Stack
                    sx={{
                      backgroundColor: '#0C2A4D',
                      padding: '10px 16px',
                      borderRadius: 1,
                    }}
                    spacing={1}
                    alignItems='center'
                    direction='row'
                  >
                    <img
                      src=' https://cdn-icons-png.flaticon.com/512/831/831276.png?w=360'
                      width='24px'
                      height='24px'
                      alt=''
                    />
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: '8px',
                          fontWeight: '600',
                          lineHeight: '1',
                        }}
                        color='white'
                      >
                        Download on the
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          fontWeight: '900',
                        }}
                        color='white'
                      >
                        App store
                      </Typography>
                    </Stack>
                  </Stack>
                </a>
              </Stack>
            </Stack>
          </Grid>
          <Grid item sm={12} md={6}></Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Footer;
