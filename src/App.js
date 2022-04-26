import React from 'react';
import './App.css';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, green } from '@mui/material/colors';
import Home from './pages/Home';
import About from './pages/cus/About';
import DetailProduct from './pages/cus/DetailProduct';
import Pets from './pages/cus/Pets';
import Cart from './pages/cus/Cart';

import useAuth from './hooks/use-auth';
import AuthContextProvider from './store/auth-context';

import Header from './components/cus/layout/navbar/Header';
import Checkout from './pages/cus/Checkouts';
import Contact from './pages/cus/Contact';
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    success: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: 'Inter, san-serif',
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'contained',
            style: {
              color: '#fff',
            },
          },
        },
      ],
    },
  },
});

function PrivateAdminOutlet() {
  const [auth, admin, status] = useAuth();
  if (status === 'pending') return <h1>Loading</h1>;
  return auth && admin ? <Outlet /> : <NotFound />;
}

function RedirectWhenSignedInRoute() {
  const [auth, , status] = useAuth();

  if (status === 'pending') return <h1>Loading</h1>;
  return !auth ? <Outlet /> : <Navigate to='/' />;
}
function InnerContent() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<InnerContent />}>
            <Route exact path='/' element={<Navigate to='/trang-chu' />} />
            <Route exact path='/trang-chu' element={<Home />} />
            <Route exact path='/san-pham' element={<DetailProduct />} />
            <Route exact path='/gioi-thieu' element={<About />} />
            <Route exact path='/thu-cung' element={<Pets />} />
            <Route exact path='/gio-hang' element={<Cart />} />
            <Route exact path='/san-pham' element={<DetailProduct />} />
            <Route exact path='/thanh-toan' element={<Checkout/>} />
            <Route exact path="/lien-he" element={<Contact/>}/>

          </Route>

          <Route path='*' element={<h1> NOT FOUND</h1>} />
        </Routes>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
