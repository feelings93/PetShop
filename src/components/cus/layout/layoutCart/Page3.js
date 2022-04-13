import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
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
export default function Page3() {
  return (
    <div style={{ marginTop: '20px', padding: '0px 10px 0px 10px' }}>
      <Typography>
        {' '}
        Cảm ơn Anh {<b>A</b>} đã cho PetShop cơ hội được phục vụ
      </Typography>
      <Box
        sx={{ backgroundColor: '#f3f3f3', padding: '15px', marginTop: '10px' }}
      >
        <Typography>ĐƠN HÀNG:</Typography>
        <ul>
          <li>
            <Box sx={{ display: 'flex', marginTop: '10px' }}>
              <Typography sx={{ fontWeight: 'bold' }}>
                Người nhận hàng:{' '}
              </Typography>
              <Typography sx={{ marginLeft: '10px' }}>
                {' '}
                Anh A, 0793111038{' '}
              </Typography>
            </Box>
          </li>
          <li>
            <Box sx={{ display: 'flex', marginTop: '5px' }}>
              <Typography sx={{ fontWeight: 'bold' }}> Giao đến: </Typography>
              <Typography sx={{ marginLeft: '10px' }}>
                {' '}
                12, Phường An Lợi Đông, TP Thủ Đức{' '}
              </Typography>
            </Box>
          </li>
          <li>
            {' '}
            <Box sx={{ display: 'flex', marginTop: '5px' }}>
              <Typography sx={{ fontWeight: 'bold' }}> Tổng tiền: </Typography>
              <Typography sx={{ marginLeft: '10px' }}>
                {' '}
                8.490.000 VNĐ{' '}
              </Typography>
            </Box>
          </li>
        </ul>
      </Box>
      <Button variant='contained' size='medium' sx={{ width: '100%' }} disabled>
        Đơn hàng chưa được thanh toán
      </Button>
      <FormControl sx={{ marginTop: '20px' }}>
        <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
          Chọn hình thức thanh toán
        </Typography>

        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='male'
          name='radio-buttons-group'
          sx={{ padding: '5px 10px 5px 10px' }}
        >
          <FormControlLabel
            value='tienmat'
            control={<Radio />}
            label='Thanh toán tiền mặt khi nhận hàng'
          />
          <FormControlLabel
            value='nganhang'
            control={<Radio />}
            label='Chuyển khoản ngân hàng'
          />
          <FormControlLabel
            value='qrcode'
            control={<Radio />}
            label='Qua QR Code'
          />
          <FormControlLabel
            value='momo'
            control={<Radio />}
            label='Qua ví điện tử Momo'
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
