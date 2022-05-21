import React, { useContext } from 'react';
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
import ListFilters from '../../components/cus/layout/layoutProduct/ListFilter';
import 'aos/dist/aos.css';
import CardPetLong from '../../components/cus/layout/layoutHome/cardPet/CardPetLong';
import CardPetPro from '../../components/cus/layout/layoutHome/cardPet/CardPetPro';
import Header from '../../components/cus/layout/navbar/Header';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import useHttp from '../../hooks/use-http';
import { getProducts } from '../../lib/api/product';
import { ProductContext } from '../../store/product-context';
import LoadingCom from '../../components/LoadingCom';
const data1 = [
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
const topData = [
  { label: 'Giá tăng dần', type: 'asc' },
  { label: 'Giá giảm dần', type: 'desc' },
  { label: 'Mới nhất', type: 'new' },
];
const Products = () => {
  const [shortPro, setShortPro] = React.useState(true);
  const { error, status, sendRequest, data } = useHttp(getProducts, true);
  const productCtx = useContext(ProductContext);
  const { setProducts } = productCtx;
  React.useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  React.useEffect(() => {
    if (status === 'completed' && data) {
      console.log(data);
      setProducts(data);
    }
  }, [data, status, setProducts]);

  React.useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  if (status === 'pending') return <LoadingCom />;
  if (error) return <h1>Đã có lỗi xảy ra</h1>;

  return (
    <Container fixed>
      {/* {console.log(data)} */}
      <Grid
        container
        xs={12}
        md={12}
        lg={12}
        sx={{ backgroundColor: '#F6F9FC' }}
        spacing={2}
      >
        <Grid item xs={12} md={4} lg={4}>
          <ListFilters typeP='Product' />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          {/* <div data-aos='fade-up' data-aos-duration={1000}> */}
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
          {/* </div> */}
          {/* <div data-aos='fade-up' data-aos-duration={1000}> */}
          <Grid container xs={12} md={12} lg={12} spacing={1}>
            {shortPro
              ? data?.map((product, index) => {
                  return (
                    <Grid item xs={4} md={4}>
                      <CardPetPro
                        {...product}
                        // new={false}
                      />
                      <hr width='95%' align='center' color='#d9d9d9' />
                    </Grid>
                  );
                })
              : data?.map((product, index) => {
                  return (
                    <Grid item xs={12} md={12}>
                      <CardPetLong {...product} />
                      <hr width='95%' align='center' color='#d9d9d9' />
                    </Grid>
                  );
                })}
          </Grid>
          {/* </div> */}
          <Box display='flex' sx={{ justifyContent: 'center', mb: 1, mt: 2 }}>
            <Pagination count={4} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Products;
