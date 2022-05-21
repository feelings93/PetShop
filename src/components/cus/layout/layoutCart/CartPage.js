import React, { useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import BillCart from './billCart';
import CardCart from './cardCart';
import TotalCart from './totalCart';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { PetCartContext } from '../../../../store/petCart-context';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const petCartCtx = useContext(PetCartContext);
  let { items, handleUpQuantity, handleDowQuantity, handleGetTotal } =
    petCartCtx;
  let navigate = useNavigate();

  const breadcrumbs = [
    <Link
      underline='hover'
      key='1'
      color='#000'
      onClick={() => navigate('/')}
      fontWeight='regular'
      sx={{ textDecoration: 'none' }}
    >
      Trang chủ
    </Link>,
    <Typography key='2' color='#999999'>
      Giỏ hàng
    </Typography>,
  ];
  return (
    <div>
      <Box
        sx={{
          backgroundColor: '#f7faff',
          padding: '10px 10px',
          borderRadius: '5px',
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize='small' />}
          aria-label='breadcrumb'
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>
      <Grid
        container
        sm={8}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '20px',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'medium',
            fontSize: '28px',
          }}
        >
          GIỎ HÀNG CỦA BẠN
        </Typography>
        <Typography
          sx={{
            fontWeight: 'regular',
            fontSize: '16px',
            color: '#5e5e5e',
          }}
        >
          Bạn có {items.length} mặt hàng muốn mua đang chờ được thanh toán
        </Typography>
      </Grid>
      <Grid
        container
        spacing={2}
        sm={12}
        sx={{ backgroundColor: '#fefefe', marginTop: '10px' }}
      >
        <Grid item sm={8} sx={{ textAlign: 'center' }}>
          <Grid
            container
            sx={{
              padding: '10px 10px',
              width: '100%',
              position: 'relative',
              overflow: 'auto',
              maxHeight: 600,
              backgroundColor: '#f7faff',
              borderRadius: '5px',
            }}
          >
            {petCartCtx.items?.map((item) => (
              <Grid item sm={12} sx={{ marginBottom: '10px' }}>
                <CardCart {...item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item sm={4}>
          <Box
            sx={{
              border: 1,
              padding: '10px 10px 15px 10px',
              borderColor: '#cfcfcf',
              borderRadius: '5px',
            }}
          >
            <Typography
              sx={{
                fontWeight: 'medium',
                fontStyle: 'Monospace',
                fontSize: '20px',
                padding: '5px 0px',
              }}
            >
              Thông tin
            </Typography>
            <hr width='100%' align='center' color='#dadada' />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px 0px',
              }}
            >
              <Typography sx={{ fontWeight: 'medium', fontStyle: 'Monospace' }}>
                Tổng tiền tạm tính:
              </Typography>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontStyle: 'Monospace',
                  color: '#ff0404',
                }}
              >
                {handleGetTotal()} VNĐ
              </Typography>
            </Box>

            <hr width='100%' align='center' color='#dadada' />
            <Typography
              sx={{
                fontWeight: 'light',
                fontStyle: 'Monospace',
                fontSize: '15px',

                padding: '10px 0px',
              }}
            >
              Nếu bạn có mã giảm giá, vui lòng sử dụng nó ở trang thanh toán khi
              đặt hàng.
            </Typography>
            <Button
              variant='contained'
              sx={{
                width: '100%',
                backgroundColor: '#000',
                '&:hover': {
                  backgroundColor: '#000',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
              onClick={() => navigate('/thanh-toan')}
            >
              Đến trang thanh toán
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
