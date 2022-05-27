import React, { useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import CardMini from './cardMini';
import { PetCartContext } from '../../../../store/petCart-context';
const ListProduct = () => {
  const petCartCtx = useContext(PetCartContext);
  let { items, handleUpQuantity, handleDowQuantity, handleGetTotal } =
    petCartCtx;
  const [hideDiscout, setHideDiscount] = useState(true);

  return (
    <Box>
      <Grid container sm={12} spacing={2} sx={{ padding: '15px 15px' }}>
        {items.map((value) => (
          <Grid item sm={12}>
            <CardMini {...value} />
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
            <Typography>{handleGetTotal()} VNĐ</Typography>
          </Grid>
          <Grid
            item
            sm={12}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Typography>Phí vận chuyển</Typography>
            <Typography>0.000 VNĐ</Typography>
          </Grid>
          <hr width='100%' align='center' color='#dadada' />
          <Grid
            item
            sm={12}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Typography>Tổng cộng</Typography>
            <Typography>{handleGetTotal()} VNĐ</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ListProduct;
