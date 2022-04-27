import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const CartNof = (props) => {
  return (
    <IconButton href='/gio-hang'>
      <Badge color='primary' badgeContent={props.countItem} showZero>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};
export default CartNof;
