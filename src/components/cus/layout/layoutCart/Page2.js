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
import ListProduct from './listProduct'

export default function Page2() {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
  const [hideDiscout, setHideDiscount] = React.useState(true);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Container fixed>
      <Grid container sm={12} spacing={2}>
        <Grid item sm={6}>
          <InfoCart/>
         </Grid>
        <Grid item sm={6} sx={{ backgroundColor:"#fafafa"}}>
          <ListProduct/>
        </Grid>
          {/* <Button
            variant='contained'
            endIcon={<ArrowDropDownIcon sx={{ color: '' }} />}
            size='medium'
            sx={{ width: '100%' }}
            onClick={() => setHideDiscount(!hideDiscout)}
          >
            Sử dụng mã giảm giá
          </Button>
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
          )} */}
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
