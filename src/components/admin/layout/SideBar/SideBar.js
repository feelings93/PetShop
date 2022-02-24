import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import { SIDEBAR_WIDTH } from '../../constants';
import Logo from './Logo';

const SideBar = (props) => {
  const { mobileOpen, handleDrawerToggle } = props;
  const drawer = (
    <Stack>
      <a href='overview'>Tổng quan</a>
      <a href='category'>Danh mục</a>
      <a href='product'>Sản phẩm</a>
      <a href='order'>Đơn hàng</a>
    </Stack>
  );
  return (
    <Box
      component='nav'
      sx={{ width: { sm: SIDEBAR_WIDTH }, flexShrink: { sm: 0 } }}
      aria-label='mailbox folders'
    >
      <Drawer
        variant='temporary'
        onClose={handleDrawerToggle}
        open={mobileOpen}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: SIDEBAR_WIDTH,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { sm: 'block', xs: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: SIDEBAR_WIDTH,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

SideBar.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};
export default SideBar;
