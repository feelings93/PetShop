import React, { Component, useContext, useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { PetCartContext } from '../../../../store/petCart-context';
import logo from "../../../../assets/images/logo.png";
const CardMini = (props) => {
  const petCartCtx = useContext(PetCartContext);
  const {
    items,
    handleUpQuantity,
    handleDowQuantity,
    handleDeleteItem,
    handleGetTotal,
    getItem,
  } = petCartCtx;
  const [itemCart, setItemCart] = useState(getItem(props.petId,props.type));
  useEffect(() => {
    setItemCart(getItem(props.petId,props.type));
  });
  return (
    <>
      <Grid container sm={12} sx={{ display: 'flex', alignItems: 'center' }}>
        {console.log(itemCart)}
        <Grid item sm={2}>
          <Badge badgeContent={itemCart.quantity} color='warning'>
            <Box
              sx={{
                height: '50px',
                width: '50px',
                borderRadius: 2,
                boxShadow: 3,
                backgroundImage: `${
                  itemCart.url ? `url(${itemCart.url})` : `url(${logo})`
                }`,                backgroundSize: ' cover',
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
            {itemCart.name}
          </Typography>
          <Typography
            sx={{
              fontWeight: 'light',
              fontStyle: 'Monospace',
              fontSize: '14px',
            }}
          >
            PetID: {itemCart.petId}
          </Typography>
        </Grid>

        <Grid item sm={2}>
          <Typography sx={{ fontWeight: 'medium', fontSize: '14px' }}>
            {itemCart.price} VNĐ
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default CardMini;
