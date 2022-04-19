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
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import InfoCart from './inforCart';
import Badge from '@mui/material/Badge';
import CardMini from './cardMini';
const ListProduct = () => {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
  const [hideDiscout, setHideDiscount] = React.useState(true);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Grid container sm={12} spacing={2} sx={{ padding: '15px 15px' }}>
        {[1, 2, 3, 4, 5, 6, 7].map((value) => (
          <Grid item sm={12}>
            <CardMini />
          </Grid>
        ))}
        <hr width='100%' align='center' color='#dadada' />
        <Grid item sm={12}>
          <Button
            variant='contained'
            endIcon={<ArrowDropDownIcon sx={{ color: '' }} />}
            size='medium'
            sx={{ width: '100%' }}
            onClick={() => setHideDiscount(!hideDiscout)}
          >
            Sử dụng mã giảm giá
          </Button>
          {!hideDiscout && (
            <Grid
              container
              sm={12}
              sx={{ marginTop: '15px', marginBottom: '25px' }}
            >
              <Grid item sm={8}>
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
                sm={4}
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <Button
                  variant='contained'
                  size='medium'
                  sx={{ backgroundColor: '#000000' }}
                >
                  Áp dụng
                </Button>
              </Grid>
            </Grid>
          )}
          <hr width='100%' align='center' color='#dadada' />
          <Grid
            item
            sm={12}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Typography>Tạm tính</Typography>
            <Typography>2.150.000 VNĐ</Typography>
          </Grid>
          <Grid
            item
            sm={12}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Typography>Phí vận chuyển</Typography>
            <Typography>40.000 VNĐ</Typography>
          </Grid>
          <hr width='100%' align='center' color='#dadada' />
          <Grid
            item
            sm={12}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Typography>Tổng cộng</Typography>
            <Typography>2.550.000 VNĐ</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ListProduct;