import React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import { SIDEBAR_WIDTH } from '../../constants';

const Header = (props) => {
  const { handleDrawerToggle } = props;
  return (
    <AppBar
      position='fixed'
      sx={{
        backgroundColor: 'rgb(250, 251, 251)',
        boxShadow: 'none',
        width: { sm: `calc(100% - ${SIDEBAR_WIDTH}px)` },
        ml: { sm: `${SIDEBAR_WIDTH}px` },
      }}
    >
      <Toolbar sx={{ color: 'rgb(148, 157, 178)' }}>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2, display: { sm: 'none' } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>

        <Avatar>H</Avatar>
      </Toolbar>
    </AppBar>
  );
};
Header.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
};
export default Header;
