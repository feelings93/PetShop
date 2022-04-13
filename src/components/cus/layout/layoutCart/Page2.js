import React from 'react';
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
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function Page2() {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
  const [hideDiscout, setHideDiscount] = React.useState(true);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{ marginTop: '30px', display: 'flex', flexDirection: 'column' }}
    >
      <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
        Thông tin khách hàng
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

      <Grid
        container
        xs={12}
        sm={12}
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Grid item xs={6} sm={3}>
          <TextField
            id='outlined-basic'
            label='Họ và tên'
            variant='outlined'
            size='small'
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            id='outlined-basic'
            label='Địa chỉ Email'
            variant='outlined'
            size='small'
            type='email'
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            id='outlined-basic'
            label='Số điện thoại'
            variant='outlined'
            size='small'
            type='tel'
          />
        </Grid>
        <Grid item xs={6} sm={3}>
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
      </Grid>

      <FormControl sx={{ marginTop: '20px' }}>
        <Typography sx={{ fontSize: '14px', color: '#999' }}>
          Chọn cách thức để nhận hàng
        </Typography>

        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='male'
          name='radio-buttons-group'
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          <FormControlLabel
            value='yourHouse'
            control={<Radio />}
            label='Giao hàng tận nơi'
          />
          <FormControlLabel
            value='myStore'
            control={<Radio />}
            label='Nhận tại cửa hàng'
          />
        </RadioGroup>
      </FormControl>
      <Grid container xs={12} spacing={2}>
        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            size='small'
            id='combo-box-demo'
            options={topData}
            renderInput={(params) => (
              <TextField {...params} label='Tỉnh thành' />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            size='small'
            id='combo-box-demo'
            options={topData}
            renderInput={(params) => (
              <TextField {...params} label='Quận huyện' />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            size='small'
            id='combo-box-demo'
            options={topData}
            renderInput={(params) => (
              <TextField {...params} label='Phường xã' />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='outlined-basic'
            label='Số nhà, tên đường'
            variant='outlined'
            size='small'
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='outlined-basic'
            label='Yêu cầu khác (không bắt buộc)'
            variant='outlined'
            size='small'
            sx={{ width: '100%' }}
          />
        </Grid>
      </Grid>
      {/* <hr
        width='100%'
        align='center'
        color='#d9d9d9'
        style={{ marginTop: '30px' }}
      /> */}

      <Grid container md={12} spacing={2} sx={{ marginTop: '20px' }}>
        <Grid item md={12}>
          <Button
            variant='contained'
            endIcon={<ArrowDropDownIcon sx={{ color: '' }} />}
            size='medium'
            sx={{ width: '100%' }}
            onClick={() => setHideDiscount(!hideDiscout)}
          >
            Sử dụng mã giảm giá
          </Button>
        </Grid>
        {!hideDiscout && (
          <>
            <Grid item md={10}>
              <TextField
                id='outlined-basic'
                label='Điền mã giảm giá'
                variant='outlined'
                size='small'
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid
              item
              md={2}
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Button variant='contained' size='medium'>
                Áp dụng
              </Button>
            </Grid>
          </>
        )}

        <Grid item md={12} sx={{ marginTop: '30px' }}>
          <TotalCart />
        </Grid>
      </Grid>
    </div>
  );
}
const topData = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
];
