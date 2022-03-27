import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import About from './pages/cus/About';
import DetailProduct from './pages/cus/DetailProduct';
import Products from './pages/cus/Product';
import Cart from './pages/cus/Cart';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Navigate to='/trang-chu' />} />
      <Route exact path='/trang-chu' element={<Home />} />
      <Route exact path='/san-pham' element={<DetailProduct />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/admin' element={<Admin />} />
      <Route exact path='/gioi-thieu' element={<About />} />
      <Route exact path='/thu-cung' element={<Products />} />
      <Route exact path='/gio-hang' element={<Cart />} />
    </Routes>
  );
}

export default App;
