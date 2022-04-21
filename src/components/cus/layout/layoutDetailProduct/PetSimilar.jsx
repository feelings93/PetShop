import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { border, Box, fontWeight, ThemeProvider } from '@mui/system';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { UilAccessibleIconAlt, UilMessage } from '@iconscout/react-unicons';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';
import CardPetPro from '../layoutHome/cardPet/CardPetPro';
import './sliders.css'
const AllCardSimilar = () => {
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
    <Box marginTop='15px' padding='0px 0px 0px 0px' >
      <Typography
        variant='h6'
        component='h2'
        sx={{
          fontSize: '25px',
          fontWeight: 'medium',
        }}
      >
        Thú cưng tương tự
      </Typography>

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
    </Box>
  );
};

export default AllCardSimilar;
