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
import { TypographyMod } from '../../components/cus/layout/layoutProduct/TypoUtils';
import TourFilters from '../../components/cus/layout/layoutProduct/TourFilter';
import 'aos/dist/aos.css';
import CardPetLong from '../../components/cus/layout/layoutHome/cardPet/CardPetLong';
import Header from '../../components/cus/layout/navbar/Header';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import { Description } from '@mui/icons-material';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import IconButton from '@mui/material/IconButton';

const data = [
  {
    image: '/images/cards/card-image1.jpg',
    name: 'Saigon Barbecue',
    salePrice: 89,
    price: 69,
    reviewNum: 200,
    properties: ['Free cancellation', 'Properties with special offers'],
    tags: ['Wine&Beer'],
    rating: 5,
  },
  {
    image: '/images/cards/card-image2.jpg',
    name: 'In Love With Saigon',
    salePrice: 89,
    price: 59,
    reviewNum: 250,
    properties: ['Free cancellation', 'Properties with special offers'],
    tags: ['Best Tours', 'Wine&Beer'],
    rating: 4,
  },
  {
    image: '/images/cards/card-image3.jpg',
    name: 'Saigon Vegan',
    salePrice: 109,
    price: 49,
    reviewNum: 50,
    properties: ['Free cancellation', 'Reverse now, pay at stay'],
    tags: ['Vegan', 'Wine&Beer'],
    rating: 4,
  },
  {
    image: '/images/cards/card-image4.jpg',
    name: 'Saigon BackStreet',
    salePrice: 79,
    price: 39,
    reviewNum: 80,
    properties: ['Free cancellation', 'Properties with special offers'],
    tags: ['Wine&Beer'],
    rating: 3,
  },
  {
    image: '/images/cards/card-image5.jpg',
    name: 'In Love With Saigon',
    salePrice: 89,
    price: 59,
    reviewNum: 250,
    properties: ['Free cancellation', 'Properties with special offers'],
    tags: ['Vegan', 'Best Tours'],
    rating: 4,
  },
];

export default function Products() {
  React.useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className=''>
      <Header />
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
          <Grid container style={{ justifyContent: 'space-between' }}>
            <Grid
              container
              elevation={3}
              item
              xs={12}
              md={4}
              lg={4}
              sx={{ pb: 2, position: 'sticky' }}
            >
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
                      <BorderAllIcon sx={{ marginRight: '2px' }} />
                      <DensityMediumIcon />
                    </Box>
                  </Box>
                </Box>
              </div>
              <div data-aos='fade-up' data-aos-duration={1000}>
                {data.map((item, index) => {
                  return (
                    <Box sx={{ mt: 1, mb: 1 }}>
                      <CardPetLong />
                      <hr width='95%' align='center' color='#d9d9d9' />
                    </Box>
                  );
                })}
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
