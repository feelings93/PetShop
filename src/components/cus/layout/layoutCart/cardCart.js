import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CardCart = () => {
  return (
    <Box
      sx={{
        padding: '10px 15px',
        // boxShadow: 3,
        borderRadius: '10px',
        backgroundColor: '#fff',
      }}
    >
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        columnSpacing={1}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Grid item sm={2}>
          <Box
            sx={{
              height: '80px',
              borderRadius: 2,
              boxShadow: 3,
              backgroundImage: `url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*')`,
              backgroundSize: ' cover',
              backgroundColor: '#f99',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
        <Grid item sm={3.5} sx={{ textAlign: 'start' }}>
          <Typography sx={{ fontWeight: 'Medium', fontStyle: 'Monospace' }}>
            Mèo lông vàng siêu đáng yêu
          </Typography>
          <Typography sx={{ fontWeight: 'Light', fontSize: '12px' }}>
            ID: 167DE906
          </Typography>
        </Grid>
        <Grid item sm={3.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton aria-label='increase item' component='span'>
            <AddCircleIcon />
          </IconButton>
          <TextField
            id='outlined-basic'
            variant='outlined'
            disabled
            inputProps={{
              min: 0,
              style: { textAlign: 'center', height: '50%' },
            }} // the change is here
            value={1}
            sx={{
              width: '50px',
              height: '50%',
              textAlign: 'center',
              alignItems: 'center',
            }}
          />
          <IconButton aria-label='decrease item' component='span'>
            <RemoveCircleIcon />
          </IconButton>
        </Grid>
        <Grid item sm={2.5}>
          <Typography sx={{ fontWeight: 'bold' }}>10.000.000 VNĐ</Typography>
        </Grid>
        <Grid item sm={0.5}>
          <IconButton aria-label='delete item' component='span'>
            <DeleteForeverIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CardCart;
