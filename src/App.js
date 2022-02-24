import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Product from './pages/admin/Product';
import NotFound from './pages/admin/NotFound';
import Category from './pages/admin/Category';
import Order from './pages/admin/Order';
import Overview from './pages/admin/Overview';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route exact path='/' element={<Navigate to='/home' />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/admin' element={<Admin />}>
          <Route path='' element={<Navigate to='overview' />} />
          <Route path='product' element={<Product />} />
          <Route path='order' element={<Order />} />
          <Route path='overview' element={<Overview />} />
          <Route path='category' element={<Category />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
