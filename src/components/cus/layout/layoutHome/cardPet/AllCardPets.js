/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
// eslint-disable-next-line import/order
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line import/no-extraneous-dependencies
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
          <CardPetPro
            url='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*'
            title='MÈO TAI CỤP SIÊU ĐÁNG YÊU            '
            type='Mèo'
            price='20.000.000'
          />
          <CardPetPro
            url='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*'
            title='MÈO TAI CỤP SIÊU ĐÁNG YÊU            '
            type='Mèo'
            price='20.000.000'
          />
          <CardPetPro
            url='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*'
            title='MÈO TAI CỤP SIÊU ĐÁNG YÊU            '
            type='Mèo'
            price='20.000.000'
          />
          <CardPetPro
            url='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*'
            title='MÈO TAI CỤP SIÊU ĐÁNG YÊU            '
            type='Mèo'
            price='20.000.000'
          />
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
          <CardPetPro
            url='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*'
            title='MÈO TAI CỤP SIÊU ĐÁNG YÊU            '
            type='Mèo'
            price='20.000.000'
            new='true'
          />
          <CardPetPro
            url='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*'
            title='MÈO TAI CỤP SIÊU ĐÁNG YÊU            '
            type='Mèo'
            price='20.000.000'
            new='true'
          />
          <CardPetPro
            url='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*'
            title='MÈO TAI CỤP SIÊU ĐÁNG YÊU            '
            type='Mèo'
            price='20.000.000'
            new='true'
          />
          <CardPetPro
            url='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*'
            title='MÈO TAI CỤP SIÊU ĐÁNG YÊU            '
            type='Mèo'
            price='20.000.000'
            new='true'
          />
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
          <CardPetPro
            url='https://cf.shopee.vn/file/e264dfaf492c333f8d2dd516aa2f4255'
            title='BÁT SỨ SIÊU YÊU            '
            type='Phụ kiện'
            price='200.000'
          />
          <CardPetPro
            url='https://cf.shopee.vn/file/e264dfaf492c333f8d2dd516aa2f4255'
            title='BÁT SỨ SIÊU YÊU            '
            type='Phụ kiện'
            price='200.000'
          />
          <CardPetPro
            url='https://cf.shopee.vn/file/e264dfaf492c333f8d2dd516aa2f4255'
            title='BÁT SỨ SIÊU YÊU            '
            type='Phụ kiện'
            price='200.000'
          />
          <CardPetPro
            url='https://cf.shopee.vn/file/e264dfaf492c333f8d2dd516aa2f4255'
            title='BÁT SỨ SIÊU YÊU            '
            type='Phụ kiện'
            price='200.000'
          />
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
          <CardPetPro
            url='https://dreampet.com.vn/wp-content/uploads/2021/01/khach-san-thu-cung-2.jpg'
            title='VẮT TUYẾN HÔI + CẮT LÔNG CHỖ VỆ SINH            '
            type='Dịch vụ'
            price='50.000'
          />
          <CardPetPro
            url='https://dreampet.com.vn/wp-content/uploads/2021/01/khach-san-thu-cung-2.jpg'
            title='VẮT TUYẾN HÔI + CẮT LÔNG CHỖ VỆ SINH            '
            type='Dịch vụ'
            price='50.000'
          />
          <CardPetPro
            url='https://dreampet.com.vn/wp-content/uploads/2021/01/khach-san-thu-cung-2.jpg'
            title='VẮT TUYẾN HÔI + CẮT LÔNG CHỖ VỆ SINH            '
            type='Dịch vụ'
            price='50.000'
          />
          <CardPetPro
            url='https://dreampet.com.vn/wp-content/uploads/2021/01/khach-san-thu-cung-2.jpg'
            title='VẮT TUYẾN HÔI + CẮT LÔNG CHỖ VỆ SINH            '
            type='Dịch vụ'
            price='50.000'
          />
        </Slider>
      </Box>
    </Container>
  );
};

export default AllCardPets;
