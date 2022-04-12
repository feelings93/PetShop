import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const CartNof = () => {
  return (
    <IconButton href='/gio-hang'>
      <Badge color='primary' badgeContent={0} showZero>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};
export default CartNof;
