import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import useHttp from './hooks/use-http';
import { getProfile } from './lib/api/auth';
import CategoryContextProvider from './store/admin/category-context';
import User from './pages/admin/User';
import UserContextProvider from './store/admin/user-context';

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

function App() {
  const [auth, setAuth] = React.useState(false);
  const [admin, setAdmin] = React.useState(false);
  const { data, status, sendRequest } = useHttp(getProfile, true);
  React.useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  React.useEffect(() => {
    if (status === 'completed') {
      if (data) {
        setAuth(true);
        if (data.role === 'admin') setAdmin(true);
        else setAdmin(false);
      } else setAuth(false);
    }
  }, [setAuth, data, status]);
  if (status === 'pending') return <h1>Loading...</h1>;
  console.log(auth);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route exact path='/' element={<Navigate to='/home' />} />
        <Route exact path='/home' element={<Home />} />
        {!auth && (
          <>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/sign-up' element={<SignUp />} />
          </>
        )}
        {auth && (
          <>
            <Route exact path='/login' element={<Navigate to='/home' />} />
            <Route exact path='/sign-up' element={<Navigate to='/home' />} />
          </>
        )}

        {admin && (
          <Route exact path='/admin' element={<Admin user={data} />}>
            <Route path='' element={<Navigate to='overview' />} />
            <Route path='product' element={<Product />} />
            <Route
              path='user'
              element={
                <UserContextProvider>
                  <User />
                </UserContextProvider>
              }
            />
            <Route path='order' element={<Order />} />
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
        )}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
