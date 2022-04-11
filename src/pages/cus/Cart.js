import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import BillCart from '../../components/cus/layout/layoutCart/billCart';
import CardCart from '../../components/cus/layout/layoutCart/cardCart';
import Header from '../../components/cus/layout/navbar/Header';
import TotalCart from '../../components/cus/layout/layoutCart/totalCart';
import ListStep from '../../components/cus/layout/layoutCart/ListStep';

export default function Cart() {
  function renderRow() {
    // const { index, style } = props;

    return (
      <ListItem style={{ width: '100%' }} component='div' disablePadding>
        <CardCart />
      </ListItem>
    );
  }
  return (
    <div>
      <Container fixed>
        <Grid container sm={12} sx={{ backgroundColor: '#fefefe' }}>
          <ListStep />
          <Grid item sm={12} sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontWeight: 'Medium', fontSize: '28px' }}>
              Giỏ hàng của bạn
            </Typography>
            <Typography
              sx={{
                fontWeight: 'regular',
                fontSize: '16px',
                color: '#5e5e5e',
                marginBottom: '5px',
              }}
            >
              Bạn có 4 mặt hàng muốn mua đang chờ được thanh toán
            </Typography>
            <hr
              width='100%'
              align='center'
              color='#d9d9d9'
              style={{ marginBottom: '30px' }}
            />

            <Grid
              container
              rowSpacing={2}
              sx={{
                padding: '10px 10px',
                width: '100%',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 800,
              }}
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <Grid item sm={12}>
                  <CardCart />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item sm={12} sx={{ marginTop: '20px', padding: '10px 10px' }}>
            <TotalCart />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
