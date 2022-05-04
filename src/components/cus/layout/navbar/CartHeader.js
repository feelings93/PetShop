import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink, useNavigate,Link } from 'react-router-dom';

const CartNof = (props) => {
  let navigate = useNavigate();
  return (
    <IconButton onClick={()=> navigate('/gio-hang')}>
      <Badge color='primary' badgeContent={props.countItem} showZero>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};
export default CartNof;
