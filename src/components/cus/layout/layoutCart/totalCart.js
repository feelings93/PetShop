import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@material-ui/core/IconButton';
import Button from '@mui/material/Button';

// //ff6b00

const TotalCart = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '10px 10px',
        // boxShadow: '3',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
          Tổng tiền tạm tính:
        </Typography>
        <Typography
          sx={{ fontWeight: '900', fontSize: '22px', color: '#ff6b00' }}
        >
          10.000.000 VNĐ
        </Typography>
      </Box>
      <Button
        variant='contained'
        component='span'
        size='large'
        color='primary'
        sx={{
          width: '100%',
          marginTop: '5px',
          // backgroundColor: '#ff6b00',
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            // backgroundColor: '#ff6b00',
          },
        }}
      >
        Tiến hành đặt hàng
      </Button>
      <Button
        variant='outlined'
        fullWidth
        size='large'
        color='primary'
        sx={{
          marginTop: '5px',
          // color: '#ff6b00',
          // borderColor: '#ff6b00',
          '&:hover': {
            // borderColor: '#ff6b00',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        Tiếp tục mua sắm
      </Button>
    </Box>
  );
};
export default TotalCart;
