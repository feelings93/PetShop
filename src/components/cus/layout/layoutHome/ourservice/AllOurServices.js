import React from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import { Box, ThemeProvider } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  UilMedkit,
  UilGitlab,
  UilArchive,
  UilAmbulance,
  UilMessage,
  UilCommentInfo,
  UilRestaurant,
  UilCloudQuestion,
  UilPhoneVolume,
  UilUserCheck,
  UilBookOpen,
} from '@iconscout/react-unicons';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';
import CardService from './CardService';

const AllOurServices = () => {
  return (
    <section style={{ backgroundColor: '#555555', width: '100%' }}>
      <Container fixed>
        <Grid
          container
          sm={12}
          xs={12}
          md={12}
          padding='30px 00px 30px 0px'
          marginLeft='25px'
        >
          <Grid
            container
            item
            sm={12}
            justifyContent='center'
            marginRight='30px'
          >
            <Typography
              variant='h6'
              component='h2'
              style={{
                color: '#fff6',
                fontSize: '13px',
                fontWeight: 'regular',
              }}
            >
              Các tiện ích, dịch vụ có tại shop
            </Typography>
          </Grid>
          <Grid
            container
            item
            sm={12}
            justifyContent='center'
            marginRight='30px'
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <Typography
              variant='h6'
              component='h2'
              zIndex='1000'
              style={{ color: '#fff', fontSize: '37px', fontWeight: 'bold' }}
            >
              TIỆN ÍCH CUNG CẤP
            </Typography>
            <Box
              sx={{
                margin: '-10px 0px 0px 0px',
                position: 'position',
                width: 180,
                height: 5,
                backgroundColor: '#ff6b00',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </Grid>

          <Grid item sm={12} height='40px' />

          <Grid item sm={12} xs={12} md={4}>
            <CardService
              title='Tổng quát'
              text='Information about us including membership, product introduction, our services.'
              color1='#1BBC9B'
              icon={UilCommentInfo}
              href='/gioi-thieu'
            />
          </Grid>
          <Grid item sm={12} xs={12} md={4}>
            <CardService
              title='Thú cưng'
              text='Displays a list of food tours, and supports advanced filters for easy search. '
              color1='#ff6868'
              icon={UilGitlab}
              href='/thu-cung'
            />
          </Grid>
          <Grid item sm={12} xs={12} md={4}>
            <CardService
              title='Phụ kiện'
              text='Common questions will be answered here or you can send your questions to us .'
              color1='#14b9d5'
              icon={UilArchive}
              href='/phu-kien'
            />
          </Grid>

          <Grid item sm={12} height='20px' />

          <Grid item sm={12} xs={12} md={4} paddingBottom='10px'>
            <CardService
              title='Liêc lạc'
              text='You can contact us here, including address, phone number, other communication. '
              color1='#f3a46b'
              icon={UilPhoneVolume}
              href='/liec-lac'
            />
          </Grid>
          <Grid item sm={12} xs={12} md={4}>
            <CardService
              title='Spa chăm sóc'
              text='Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.'
              color1='#c755da'
              icon={UilMedkit}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={4}>
            <CardService
              title='Tin tức thú cưng'
              text='News, blogs about food, delicious dishes, sharing experiences about food tours.'
              color1='#ff6868'
              icon={UilBookOpen}
              href='/tin-tuc'
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AllOurServices;
