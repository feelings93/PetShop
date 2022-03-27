import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import Container from '@mui/material/Container';
import List from '@mui/material/List';

import CardCart from '../../components/cus/layout/layoutCart/cardCart';

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
    <Container fixed>
      <Grid container sm={12} sx={{ backgroundColor: '#fefefe' }}>
        <Grid item sm={8}>
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

          <List
            sx={{
              width: '100%',
              position: 'relative',
              overflow: 'auto',
              maxHeight: 600,
              '& ul': { marginTop: 15 },
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (value) => (
                <CardCart />
              )
            )}
          </List>
        </Grid>
        <Grid item sm={4}>
          <Box sx={{ backgroundColor: '#f99' }}>a</Box>
        </Grid>
      </Grid>
    </Container>
  );
}
