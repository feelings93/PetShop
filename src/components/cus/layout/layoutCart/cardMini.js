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

const CardMini = () =>{
    return(
<>
      <Grid container sm={12} sx={{ display: 'flex', alignItems: 'center' }}>
          <Grid item sm={2}>
          <Badge badgeContent={4} color="warning">
          <Box
            sx={{
              height: '50px',
              width: '50px',
              borderRadius: 2,
              boxShadow: 3,
              backgroundImage: `url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*')`,
              backgroundSize: ' cover',
              backgroundColor: '#f99',
              backgroundPosition: 'center',
            }}
          />
        </Badge>
          </Grid>
        <Grid item sm={8}>
        <Typography
            sx={{
              fontWeight: 'regular',
              fontStyle: 'Monospace',
              fontSize: '16px',
            }}
          >
            Mèo lông vàng siêu đáng yêu
          </Typography>
          <Typography
            sx={{
              fontWeight: 'light',
              fontStyle: 'Monospace',
              fontSize: '14px',
            }}
          >
            Loại: Mèo
          </Typography>

       
        </Grid>

        <Grid item sm={2}>
        <Typography sx={{ fontWeight: 'medium', fontSize: '14px' }}>
          10.000.000 VNĐ
        </Typography>
        </Grid>
      </Grid>
    </>
    );
    
}
export default CardMini;