import React from 'react';
import './App.css';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, green } from '@mui/material/colors';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Product from './pages/admin/Product';
import NotFound from './pages/admin/NotFound';
import Category from './pages/admin/Category';
import Order from './pages/admin/Order';
import Overview from './pages/admin/Overview';
import CategoryContextProvider from './store/admin/category-context';
import User from './pages/admin/User';
import UserContextProvider from './store/admin/user-context';
import ProductContextProvider from './store/admin/product-context';
import useAuth from './hooks/use-auth';
import AuthContextProvider from './store/auth-context';
import OrderContextProvider from './store/admin/order-context';
import OrderDetail from './pages/admin/OrderDetail';
import ProductDetail from './pages/admin/ProductDetail';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthContextProvider>
        <Routes>
          <Route exact path='/' element={<Navigate to='/home' />} />
          <Route exact path='/home' element={<Home />} />
          <Route element={<RedirectWhenSignedInRoute />}>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/sign-up' element={<SignUp />} />
          </Route>
          <Route element={<PrivateAdminOutlet />}>
            <Route exact path='/admin' element={<Admin user={{}} />}>
              <Route path='' element={<Navigate to='overview' />} />
              <Route
                path='product'
                element={
                  <ProductContextProvider>
                    <Product />
                  </ProductContextProvider>
                }
              />
              <Route
                path='user'
                element={
                  <UserContextProvider>
                    <User />
                  </UserContextProvider>
                }
              />
              <Route
                path='order'
                element={
                  <OrderContextProvider>
                    <Order />
                  </OrderContextProvider>
                }
              />
              <Route path='order/:id' element={<OrderDetail />} />
              <Route path='product/:id' element={<ProductDetail />} />

              <Route path='overview' element={<Overview />} />
              <Route
                path='category'
                element={
                  <CategoryContextProvider>
                    <Category />
                  </CategoryContextProvider>
                }
              />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
