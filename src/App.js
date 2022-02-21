import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import About from './pages/cus/About';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Navigate to='/home' />} />
      <Route exact path='/home' element={<Home />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/admin' element={<Admin />} />
      <Route exact path='/gioi-thieu' element={<About />} />
    </Routes>
  );
}

export default App;
