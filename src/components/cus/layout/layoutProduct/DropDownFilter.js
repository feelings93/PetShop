/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-duplicates
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// eslint-disable-next-line import/no-duplicates
import { Drawer, Fab } from '@mui/material';
import { Box } from '@mui/system';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import TourFilters from './TourFilter';

export default function DropDownFilter() {
  const [left, setLeft] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setLeft(open);
  };
  const list = () => (
    <Box
      role='presentation'
      // onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
    >
      <TourFilters />
    </Box>
  );
  return (
    <ClickAwayListener onClickAway={toggleDrawer(false)}>
      <div>
        <Drawer anchor='left' open={left} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
        <Fab
          sx={{ position: 'fixed', zIndex: '99', left: '5px', bottom: '20px' }}
        >
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Fab>
      </div>
    </ClickAwayListener>
  );
}
