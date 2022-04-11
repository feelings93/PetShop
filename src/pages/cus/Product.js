/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Breadcrumbs,
  Link,
  Typography,
  Container,
  Grid,
  Box,
  Pagination,
} from '@mui/material';
import { red } from '@mui/material/colors';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';

import Aos from 'aos';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import IconButton from '@mui/material/IconButton';

import { TypographyMod } from '../../components/cus/layout/layoutProduct/TypoUtils';
import TourFilters from '../../components/cus/layout/layoutProduct/TourFilter';
import 'aos/dist/aos.css';
import CardPetLong from '../../components/cus/layout/layoutHome/cardPet/CardPetLong';
import CardPetPro from '../../components/cus/layout/layoutHome/cardPet/CardPetPro';
import Header from '../../components/cus/layout/navbar/Header';

const data = [
  {
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*',
    title: 'MÈO TAI CỤP SIÊU ĐÁNG YÊU            ',
    type: 'Mèo',
    price: '20.000.000',
  },
  {
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*',
    title: 'MÈO TAI CỤP SIÊU ĐÁNG YÊU            ',
    type: 'Mèo',
    price: '20.000.000',
  },
  {
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*',
    title: 'MÈO TAI CỤP SIÊU ĐÁNG YÊU            ',
    type: 'Mèo',
    price: '20.000.000',
  },
  {
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*',
    title: 'MÈO TAI CỤP SIÊU ĐÁNG YÊU            ',
    type: 'Mèo',
    price: '20.000.000',
  },
  {
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*',
    title: 'MÈO TAI CỤP SIÊU ĐÁNG YÊU            ',
    type: 'Mèo',
    price: '20.000.000',
  },
  {
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*',
    title: 'MÈO TAI CỤP SIÊU ĐÁNG YÊU            ',
    type: 'Mèo',
    price: '20.000.000',
  },
  {
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*',
    title: 'MÈO TAI CỤP SIÊU ĐÁNG YÊU            ',
    type: 'Mèo',
    price: '20.000.000',
  },
];

export default function Products() {
  React.useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const [shortPro, setShortPro] = React.useState(true);
  return (
    <div className=''>
      <Container fluid sx={{ mb: 2 }}>
        <Box display='flex'>
          <HomeIcon
            sx={{ mr: 0.5, marginTop: 'auto', marginBottom: 'auto' }}
            fontSize='inherit'
          />

          <Breadcrumbs
            separator={<NavigateNextIcon fontSize='small' />}
            aria-label='breadcrumb'
          >
            <Link underline='hover' key='1' color='inherit' href='/'>
              FoodRoad
            </Link>
            ,
            <Link underline='hover' key='2' color='inherit' href='/tours'>
              Tours
            </Link>
            ,
          </Breadcrumbs>
        </Box>
      </Container>
      <Box style={{ backgroundColor: '#F6F9FC', height: '100%' }}>
        <Container fluid>
          <Grid container xs={12} md={12} lg={12}>
            <Grid item xs={12} md={4} lg={4}>
              <TourFilters />
            </Grid>
            <Grid item xs={12} md={8} lg={8} sx={{ mb: 2 }}>
              {/* Tour banner */}
              <div data-aos='fade-up' data-aos-duration={1000}>
                <Box
                  sx={{
                    backgroundColor: 'white',
                    p: 2,
                    m: '7px 0 7px 0',
                    borderRadius: '7px',
                  }}
                >
                  <Box display='flex' sx={{ justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex' }}>
                      <LocalOfferIcon />
                      <Typography
                        variant='h6'
                        component='h2'
                        fontSize='18px'
                        fontWeight='medium'
                        color={red[600]}
                        marginLeft='2px'
                      >
                        Hot deals
                      </Typography>
                    </div>

                    <Box>
                      <TypographyMod fontSize='1rem' fontWeight='light'>
                        We offers variety of Food Tours which are suitable for
                        everyone
                      </TypographyMod>
                    </Box>
                    <Box>
                      {shortPro ? (
                        <>
                          <IconButton size='small' disabled>
                            <BorderAllIcon />
                          </IconButton>
                          <IconButton
                            size='small'
                            onClick={() => setShortPro(!shortPro)}
                          >
                            <DensityMediumIcon />
                          </IconButton>
                        </>
                      ) : (
                        <>
                          <IconButton
                            size='small'
                            onClick={() => setShortPro(!shortPro)}
                          >
                            <BorderAllIcon />
                          </IconButton>
                          <IconButton size='small' disabled>
                            <DensityMediumIcon />
                          </IconButton>
                        </>
                      )}
                    </Box>
                  </Box>
                </Box>
              </div>
              <div data-aos='fade-up' data-aos-duration={1000}>
                <Grid container sm={12} xs={12} md={12}>
                  {shortPro
                    ? data.map((item, index) => {
                        return (
                          <Grid item sm={4} md={4}>
                            <CardPetPro
                              url={item.url}
                              title={item.title}
                              type={item.type}
                              price={item.price}
                              new={false}
                            />
                            <hr width='95%' align='center' color='#d9d9d9' />
                          </Grid>
                        );
                      })
                    : data.map((item, index) => {
                        return (
                          <Box sx={{ mt: 1, mb: 1 }}>
                            <CardPetLong />
                            <hr width='95%' align='center' color='#d9d9d9' />
                          </Box>
                        );
                      })}
                </Grid>
              </div>
              <Box
                display='flex'
                sx={{ justifyContent: 'center', mb: 1, mt: 2 }}
              >
                <Pagination count={4} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
