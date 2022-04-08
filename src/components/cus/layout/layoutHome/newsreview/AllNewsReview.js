import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { UilAccessibleIconAlt, UilMessage } from '@iconscout/react-unicons';
import zIndex from '@mui/material/styles/zIndex';
import CardNews from './CardNews';
import CardNewRight from './CardNewRight';

const AllNewsReview = () => {
  return (
    <Box marginLeft='-10px' paddingBottom='40px'>
      <Container fixed>
        <Grid
          container
          sm={12}
          xs={12}
          marginBottom='-40px'
          marginTop='60px'
          justifyContent='center'
        >
          <Grid container sm={12} justifyContent='center' marginTop='10px'>
            <Typography
              variant='h6'
              component='h2'
              style={{
                color: '#c2c2c2',
                fontSize: '13px',
                fontWeight: 'Medium',
              }}
            >
              Các tin tức, blog về thú cưng
            </Typography>
            <Grid
              container
              item
              sm={12}
              // justifyContent='center'
              zIndex='1000'
              marginLeft='20px'
            >
              <Grid item sm={7.6} display='flex' justifyContent='flex-end'>
                <Typography
                  variant='h6'
                  component='h2'
                  style={{
                    color: '#000',
                    fontSize: '35px',
                    fontWeight: 'bold',
                  }}
                >
                  THÚ CƯNG & TIN TỨC
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4.4}
                display='flex'
                justifyContent='flex-end'
              >
                <Button
                  sx={{
                    color: '#9e9e9e',
                    borderRadius: '20px',
                    textTransform: 'none',
                    '&:hover': {
                      opacity: [0.9, 0.8, 0.7],
                    },
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                  endIcon={<UilMessage />}
                  href='/tours'
                >
                  Xem thêm
                </Button>
              </Grid>
            </Grid>
            <Box
              display={{ xs: 'none', sm: 'flex' }}
              sx={{
                margin: '-5px 0px 10px 0px',
                position: 'position',
                width: 160,
                height: 5,
                backgroundColor: '#ff6b00',
                '&:hover': {
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          columnSpacing={2}
          sm={12}
          xs={12}
          md={12}
          display='flex'
          marginLeft='10px'
        >
          <Grid item sm={12} xs={12} md={6}>
            <CardNews
              color1='#fff'
              fontcolor1='#999'
              title1='#5c5b5b'
              colorbutton='#f37011'
              url='https://amthucvietnam.com.vn/wp-content/uploads/2021/04/cm_Anh_Ga_1.jpg'
            />
          </Grid>
          <Grid item sm={12} xs={12} md={6}>
            <CardNews
              color1='#1bbc9b'
              fontcolor1='#fbfeff'
              title1='#fff'
              colorbutton='#fff'
              url='https://i.ytimg.com/vi/ZGs59VEu3hQ/maxresdefault.jpg'
            />
          </Grid>
        </Grid>
        <Grid
          container
          columnSpacing={2}
          sm={12}
          xs={12}
          md={12}
          display='flex'
          marginTop='-45px'
          marginLeft='10px'
        >
          <Grid item sm={12} xs={12} md={6}>
            <CardNewRight
              color1='#14b9d5'
              fontcolor1='#fbfeff'
              title1='#fff'
              colorbutton='#fff'
              url='https://cookingchew.com/wp-content/uploads/2020/09/Blue-Foods-CO662-Pin-15.jpg.webp'
            />
          </Grid>
          <Grid item sm={12} xs={12} md={6}>
            <CardNews
              color1='#fff'
              fontcolor1='#999'
              title1='#5c5b5b'
              colorbutton='#f76570'
              url='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mojito-cocktails-150961e.jpg'
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AllNewsReview;
