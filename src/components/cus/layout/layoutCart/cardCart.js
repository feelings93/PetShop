import React, { Component, useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { PetCartContext } from '../../../../store/petCart-context';
import { set } from 'react-hook-form';

const CardCart = (props) => {
  const petCartCtx = useContext(PetCartContext);
  const { items,handleUpQuantity,handleDowQuantity,handleDeleteItem } = petCartCtx;
  const [quantity,setQuantity]= useState(props.quantity);
  const [price,setPrice]= useState(props.price);


  const handleUp =() => {
      setPrice((price/(quantity)*(quantity+1)));
      setQuantity(quantity+1);
  }
  const handleDown = () =>{
    if(quantity>1){
      setPrice((price/(quantity)*(quantity-1)));
      setQuantity(quantity-1);

    }
    else{
      setQuantity(quantity-1);
      handleDeleteItem();
    } 

  }
  return (
    <Box
      sx={{
        padding: '10px 15px',
        // boxShadow: 3,
        borderRadius: '10px',
        backgroundColor: '#fff',
      }}
    >
      {/* {console.log(items)} */}
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
              backgroundImage: `url(${props.url})`,
              backgroundSize: ' cover',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
        <Grid item sm={3.5} sx={{ textAlign: 'start' }}>
          <Typography sx={{ fontWeight: 'Medium', fontStyle: 'Monospace' }}>
            {props.name}
          </Typography>
          <Typography sx={{ fontWeight: 'Light', fontSize: '12px' }}>
           ID: {props.petId}
          </Typography>
        </Grid>
        <Grid item sm={3.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton aria-label='increase item' component='span' onClick={()=>{handleUpQuantity(props.petId);handleUp()}}>
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
            value={quantity}
            sx={{
              width: '50px',
              height: '50%',
              textAlign: 'center',
              alignItems: 'center',
            }}
          />
          <IconButton aria-label='decrease item' component='span'  onClick={()=>{handleDowQuantity(props.petId);handleDown()}}>
            <RemoveCircleIcon />
          </IconButton>
        </Grid>
        <Grid item sm={2.5}>
          <Typography sx={{ fontWeight: 'bold' }}>{price} VNĐ</Typography>
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
