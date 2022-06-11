import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';

import InfoCart from './inforCart';
import ListProduct from './listProduct';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  let navigate = useNavigate();

  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
  const [hideDiscout, setHideDiscount] = React.useState(true);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const breadcrumbs = [
    <Link
      underline='hover'
      key='1'
      color='#000'
      onClick={() => navigate('/gio-hang')}
      fontWeight='regular'
      sx={{ textDecoration: 'none', cursor: 'pointer' }}
    >
      Giỏ hàng
    </Link>,
    <Typography key='2' color='#999999'>
      Thanh toán
    </Typography>,
  ];
  return (
    <Container fixed>
      <Box></Box>
      <Grid container sm={12} spacing={2}>
        <Grid item sm={12}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize='small' />}
            aria-label='breadcrumb'
            sx={{
              backgroundColor: '#f7faff',
              padding: '10px 0px',
              borderRadius: '5px',
              marginBottom: '15px',
            }}
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Grid>
        <Grid item sm={6}>
          <InfoCart />
        </Grid>
        <Grid item sm={6} sx={{ backgroundColor: '#f7faff' }}>
          <ListProduct />
        </Grid>
      </Grid>
    </Container>
  );
}
const topData = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
];
