import React, { Component, useContext, useState, useEffect } from 'react';
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
import logo from '../../../../assets/images/logo.png';

const CardCart = (props) => {
  const petCartCtx = useContext(PetCartContext);
  const {
    items,
    handleUpQuantity,
    handleDowQuantity,
    handleDeleteItem,
    handleGetTotal,
    getItem,
  } = petCartCtx;
  const [itemCart, setItemCart] = useState(getItem(props.petId));
  useEffect(() => {
    setItemCart(getItem(props.petId));
  });
  // const handleUp = () => {
  //   setPrice((price / quantity) * (quantity + 1));
  //   setQuantity(quantity + 1);
  // };
  // const handleDown = () => {
  //   if (quantity > 1) {
  //     setPrice((price / quantity) * (quantity - 1));
  //     setQuantity(quantity - 1);
  //   } else {
  //     setQuantity(quantity - 1);
  //     handleDeleteItem();
  //   }
  // };
  return (
    <Box
      sx={{
        padding: '10px 15px',
        // boxShadow: 3,
        borderRadius: '10px',
        backgroundColor: '#fff',
      }}
    >
      {console.log(props.petId)}
      {console.log(itemCart)}
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
              backgroundImage: `${
                itemCart.url ? `url(${itemCart.url})` : `url(${logo})`
              }`,
              backgroundSize: ' cover',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
        <Grid item sm={3.5} sx={{ textAlign: 'start' }}>
          <Typography sx={{ fontWeight: 'Medium', fontStyle: 'Monospace' }}>
            {itemCart.name}
          </Typography>
          <Typography sx={{ fontWeight: 'Light', fontSize: '12px' }}>
            ID: {props.petId}
          </Typography>
        </Grid>
        <Grid item sm={3.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            aria-label='increase item'
            component='span'
            onClick={() => {
              handleUpQuantity(props.petId);
              setItemCart(getItem(props.petId));
            }}
          >
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
            value={itemCart.quantity}
            sx={{
              width: '50px',
              height: '50%',
              textAlign: 'center',
              alignItems: 'center',
            }}
          />
          <IconButton
            aria-label='decrease item'
            component='span'
            onClick={() => {
              handleDowQuantity(props.petId);
              setItemCart(getItem(props.petId));
            }}
          >
            <RemoveCircleIcon />
          </IconButton>
        </Grid>
        <Grid item sm={2.5}>
          <Typography sx={{ fontWeight: 'bold' }}>
            {itemCart.price} VNĐ
          </Typography>
        </Grid>
        <Grid item sm={0.5}>
          <IconButton
            aria-label='delete item'
            component='span'
            onClick={() => handleDeleteItem(props.petId)}
          >
            <DeleteForeverIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CardCart;
