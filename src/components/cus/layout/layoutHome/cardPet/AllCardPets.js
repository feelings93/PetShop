import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { border, Box, fontWeight, ThemeProvider } from '@mui/system';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { UilAccessibleIconAlt, UilMessage } from '@iconscout/react-unicons';
import './sliders.css';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';
import CardPetPro from './CardPetPro';

const AllCardPets = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    className: 'sliders',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container fixed>
      <Box marginLeft='0px' padding='0px 0px 0px 0px'>
        <Grid
          container
          xs={12}
          sm={12}
          justifyContent='center'
          marginTop='40px'
        >
          <Typography
            variant='h6'
            component='h2'
            style={{
              color: '#c2c2c2',
              fontSize: '13px',
              fontWeight: 'Medium',
            }}
          >
            Nhiều lựa chọn về thú cưng
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
                style={{ color: '#000', fontSize: '35px', fontWeight: 'bold' }}
              >
                THÚ CƯNG NỔI BẬT
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

        <Slider {...settings}>
          {data.map((pet, index) => {
            return (
              <CardPetPro
                {...pet}
                // new={false}
              />
            );
          })}
        </Slider>
        <Box height='50px' />
        {/* THU CUNG MOI RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}
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
            Nhiều lựa chọn về thú cưng mới
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
                style={{ color: '#000', fontSize: '35px', fontWeight: 'bold' }}
              >
                THÚ CƯNG MỚI RA
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

        <Slider {...settings}>
          {data.map((pet, index) => {
            return (
              <CardPetPro
                {...pet}
                // new={false}
              />
            );
          })}
        </Slider>
        <Box height='50px' />

        {/* PHỤ KIỆN THÚ CƯNGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG */}
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
            Nhiều lựa chọn về phụ kiện
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
                style={{ color: '#000', fontSize: '35px', fontWeight: 'bold' }}
              >
                THÚ CƯNG PHỤ KIỆN
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

        <Slider {...settings}>
          {data.map((pet, index) => {
            return (
              <CardPetPro
                {...pet}
                // new={false}
              />
            );
          })}
        </Slider>
        <Box height='50px' />

        {/* DỊCH VỤ THÚ CƯNG RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}
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
            Nhiều lựa chọn về chăm sóc thú cưng
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
                style={{ color: '#000', fontSize: '35px', fontWeight: 'bold' }}
              >
                THÚ CƯNG SPA-CARE
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

        <Slider {...settings}>
          {data.map((pet, index) => {
            return (
              <CardPetPro
                {...pet}
                // new={false}
              />
            );
          })}
        </Slider>
      </Box>
    </Container>
  );
};

export default AllCardPets;
const data = [
  {
    id: 1,
    name: 'MÈO TAI CỤP SIÊU ĐÁNG YÊU 1 ',
    age: 1,
    gender: 'Đực',
    price: 2000000,
    status: '',
    describe: 'Chó cảnh',
    type: {
      id: 1,
      name: 'Chó',
    },
    breed: {
      id: 1,
      name: 'Chó cảnh khuyển',
    },
    photos: [
      {
        id: 1,
        url: 'https://vpet.vn/upload/pet/pet-1617247618.jpg',
      },
      {
        id: 2,
        url: 'https://firebasestorage.googleapis.com/v0/b/doan1-343302.appspot.com/o/images%2Fpets%2Fundefined%2FScreenshot%20(3).png?alt=media&token=ac43c80a-11e7-4ab5-a0cf-6f288b242f94',
      },
    ],
  },
  {
    id: 2,
    name: 'MÈO TAI CỤP SIÊU ĐÁNG YÊU 2',
    age: 1,
    gender: 'Đực',
    price: 2000000,
    status: '',
    describe: 'Chó cảnh',
    type: {
      id: 1,
      name: 'Chó',
    },
    breed: {
      id: 1,
      name: 'Chó cảnh khuyển',
    },
    photos: [
      {
        id: 1,
        url: 'https://vpet.vn/upload/pet/pet-1617247618.jpg',
      },
      {
        id: 2,
        url: 'https://firebasestorage.googleapis.com/v0/b/doan1-343302.appspot.com/o/images%2Fpets%2Fundefined%2FScreenshot%20(3).png?alt=media&token=ac43c80a-11e7-4ab5-a0cf-6f288b242f94',
      },
    ],
  },
  {
    id: 3,
    name: 'MÈO TAI CỤP SIÊU ĐÁNG YÊU 3',
    age: 1,
    gender: 'Đực',
    price: 2000000,
    status: '',
    describe: 'Chó cảnh',
    type: {
      id: 1,
      name: 'Chó',
    },
    breed: {
      id: 1,
      name: 'Chó cảnh khuyển',
    },
    photos: [
      {
        id: 1,
        url: 'https://vpet.vn/upload/pet/pet-1617247618.jpg',
      },
      {
        id: 2,
        url: 'https://firebasestorage.googleapis.com/v0/b/doan1-343302.appspot.com/o/images%2Fpets%2Fundefined%2FScreenshot%20(3).png?alt=media&token=ac43c80a-11e7-4ab5-a0cf-6f288b242f94',
      },
    ],
  },
  {
    id: 4,
    name: 'MÈO TAI CỤP SIÊU ĐÁNG YÊU 4',
    age: 1,
    gender: 'Đực',
    price: 2000000,
    status: '',
    describe: 'Chó cảnh',
    type: {
      id: 1,
      name: 'Chó',
    },
    breed: {
      id: 1,
      name: 'Chó cảnh khuyển',
    },
    photos: [
      {
        id: 1,
        url: 'https://vpet.vn/upload/pet/pet-1617247618.jpg',
      },
      {
        id: 2,
        url: 'https://firebasestorage.googleapis.com/v0/b/doan1-343302.appspot.com/o/images%2Fpets%2Fundefined%2FScreenshot%20(3).png?alt=media&token=ac43c80a-11e7-4ab5-a0cf-6f288b242f94',
      },
    ],
  },
];
