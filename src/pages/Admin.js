import React from 'react';
import Box from '@mui/material/Box';
import Header from '../components/admin/layout/Header/Header';
import SideBar from '../components/admin/layout/SideBar/SideBar';

const Admin = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <SideBar />
    </Box>
  );
};

export default Admin;
