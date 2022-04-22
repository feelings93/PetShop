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
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const data = [
  {
    url: 'https://vpet.vn/upload/pet/pet-1617247618.jpg',
    title: 'MÈO TAI CỤP SIÊU ĐÁNG YÊU            ',
    type: 'Mèo',
    price: '20.000.000',
  },
  {
    url: 'https://vpet.vn/upload/pet/pet-1617247618.jpg',
    title: 'MÈO TAI CỤP SIÊU ĐÁNG YÊU            ',
    type: 'Mèo',
    price: '20.000.000',
  },
  {
    url: 'https://vpet.vn/upload/pet/pet-1617247618.jpg',
    title: 'MÈO TAI CỤP SIÊU ĐÁNG YÊU            ',
    type: 'Mèo',
    price: '20.000.000',
  },
  {
    url: 'https://vpet.vn/upload/pet/pet-1617247618.jpg',
    title: 'MÈO TAI CỤP SIÊU ĐÁNG YÊU            ',
    type: 'Mèo',
    price: '20.000.000',
  },
  {
    url: 'https://vpet.vn/upload/pet/pet-1617247618.jpg',
    title: 'MÈO TAI CỤP SIÊU ĐÁNG YÊU            ',
    type: 'Mèo',
    price: '20.000.000',
  },
  {
    url: 'https://vpet.vn/upload/pet/pet-1617247618.jpg',
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
const topData = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
];
export default function Products() {
  React.useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const [shortPro, setShortPro] = React.useState(true);
  return (
    <Container fixed>
      <Grid
        container
        xs={12}
        md={12}
        lg={12}
        sx={{ backgroundColor: '#F6F9FC' }}
        spacing={2}
      >
        <Grid item xs={12} md={4} lg={4}>
          <TourFilters />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <div data-aos='fade-up' data-aos-duration={1000}>
            <Box
              sx={{
                backgroundColor: 'white',
                borderRadius: '7px',
                padding: '5px 10px',
                marginTop: '8px',
                marginBottom: '10px',
              }}
            >
              <Box display='flex' sx={{ justifyContent: 'flex-end' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '10px',
                  }}
                >
                  <Typography sx={{ marginRight: '5px' }}>
                    Sắp xếp theo:{' '}
                  </Typography>
                  <Autocomplete
                    disablePortal
                    id='combo-box-demo'
                    options={topData}
                    size='small'
                    sx={{ width: '150px', zIndex: '2' }}
                    renderInput={(params) => (
                      <TextField {...params} label='Quận, huyện' />
                    )}
                  />
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
            <Grid container xs={12} md={12} lg={12} spacing={1}>
              {shortPro
                ? data.map((item, index) => {
                    return (
                      <Grid item xs={4} md={4}>
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
                        <CardPetLong
                          url={item.url}
                          title={item.title}
                          type={item.type}
                          price={item.price}
                          new={false}
                        />
                        <hr width='95%' align='center' color='#d9d9d9' />
                      </Box>
                    );
                  })}
            </Grid>
          </div>
          <Box display='flex' sx={{ justifyContent: 'center', mb: 1, mt: 2 }}>
            <Pagination count={4} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
