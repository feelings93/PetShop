import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import BillCart from './billCart';
import CardCart from './cardCart';
import TotalCart from './totalCart';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useNavigate } from 'react-router-dom';

const InfoCart = () => {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
  const [hideDiscout, setHideDiscount] = React.useState(true);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  let navigate = useNavigate();

  return (
    <>
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 'medium',
          marginBottom: '10px',
        }}
      >
        Thông tin giao hàng
      </Typography>
      <FormControl sx={{ marginTop: '10px' }}>
        <Typography sx={{ fontSize: '14px', color: '#999' }}>
          Quý khách là
        </Typography>

        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='male'
          name='radio-buttons-group'
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          <FormControlLabel value='male' control={<Radio />} label='Anh' />
          <FormControlLabel value='female' control={<Radio />} label='Chị' />
        </RadioGroup>
      </FormControl>
      <Grid container sm={12} spacing={1}>
        <Grid item sm={12}>
          <TextField
            id='outlined-basic'
            label='Họ và tên'
            variant='outlined'
            size='small'
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item sm={8}>
          <TextField
            id='outlined-basic'
            label='Email'
            variant='outlined'
            size='small'
            type='email'
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            id='outlined-basic'
            label='Số điện thoại'
            variant='outlined'
            size='small'
            type='tel'
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            id='outlined-basic'
            label='Địa chỉ liên hệ'
            variant='outlined'
            size='small'
            type='email'
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            id='date'
            label='Birthday'
            type='date'
            defaultValue='2017-05-24'
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: '100%' }}
            size='small'
          />
        </Grid>
        <Grid item sm={4}>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={topData}
            size='small'
            renderInput={(params) => (
              <TextField {...params} label='Tỉnh, thành phố' />
            )}
          />
        </Grid>
        <Grid item sm={4}>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={topData}
            size='small'
            renderInput={(params) => (
              <TextField {...params} label='Quận, huyện' />
            )}
          />
        </Grid>
        <Grid item sm={4}>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={topData}
            size='small'
            renderInput={(params) => (
              <TextField {...params} label='Phường, xã' />
            )}
          />
        </Grid>
        <Grid item sm={12}>
          <FormControl sx={{ marginTop: '20px', width: '100%' }}>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 'medium',
                marginBottom: '10px',
              }}
            >
              Chọn cách thức để nhận hàng
            </Typography>

            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='male'
              name='radio-buttons-group'
              sx={{ display: 'flex', width: '100%' }}
            >
              <FormControlLabel
                value='yourHouse'
                control={<Radio />}
                label='Giao hàng tận nơi'
                sx={{
                  border: 1,
                  borderRadius: '5px',
                  padding: '0px 15px',
                  marginRight: '0px',
                  marginLeft: '0px',
                  color: '#999',
                  borderColor: '#c4c4c4',
                }}
              />
              <FormControlLabel
                value='myStore'
                control={<Radio />}
                label='Nhận tại cửa hàng'
                sx={{
                  border: 1,
                  borderRadius: '5px',
                  padding: '0px 15px',
                  marginRight: '0px',
                  marginLeft: '0px',
                  color: '#999',
                  borderColor: '#c4c4c4',
                  marginTop: '15px',
                }}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item sm={12}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 'medium',
              marginBottom: '10px',
            }}
          >
            Phương thức thanh toán
          </Typography>
          <FormControl
            sx={{
              width: '100%',
              border: 1,
              borderRadius: '5px',
              borderColor: '#c4c4c4',
              padding: '0px 10px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '10px 5px',
            }}
          >
            <FormControlLabel
              value='cash'
              control={<Radio />}
              label=''
              sx={{ marginLeft: '10px', marginRight: '0px' }}
            />

            <AccountBalanceWalletIcon />
            <Typography>Thanh toán bằng tiền mặt (SHIP COD)</Typography>
          </FormControl>
        </Grid>
        <Grid
          item
          sm={12}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          <a
            style={{
              fontSize: '15px',
              color: '#2196f3',
              textDecoration: 'none',
            }}
            onClick={() => navigate('/gio-hang')}
          >
            {' '}
            Giỏ hàng
          </a>
          <Button variant='contained' size='medium'>
            {' '}
            Hoàn tất đơn hàng
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
const topData = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
];
export default InfoCart;
