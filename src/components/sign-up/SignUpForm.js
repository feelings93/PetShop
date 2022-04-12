import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import {
  AlternateEmail,
  People,
  RemoveRedEye,
  VisibilityOff,
} from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import swal from 'sweetalert';
import GoogleLogin from 'react-google-login';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import google from '../../assets/images/google.png';
import useHttp from '../../hooks/use-http';
import { loginGoogle, signup } from '../../lib/api/auth';

const SignUpForm = () => {
  const { data, error, status, sendRequest } = useHttp(signup);
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [isShowPass, setIsShowPass] = React.useState(false);
  const {
    data: dataGoogle,
    error: errorGoogle,
    status: statusGoogle,
    sendRequest: sendRequestGoogle,
  } = useHttp(loginGoogle);

  const handleShowPass = () => {
    setIsShowPass((prev) => !prev);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    sendRequest({ email, password, name });
  };

  const responseGoogleSuccess = (response) => {
    sendRequestGoogle({ tokenId: response.tokenId });
  };

  const responseGoogleFailure = () => {
    swal('Đã có lỗi xảy ra', error, 'error');
  };

  React.useEffect(() => {
    if (status === 'completed') {
      if (!error) {
        window.localStorage.setItem('accessToken', data);
        window.location.replace('home');
      } else {
        swal('Đã có lỗi xảy ra', error, 'error');
      }
    }
  }, [data, error, status]);

  React.useEffect(() => {
    if (statusGoogle === 'completed') {
      if (!errorGoogle) {
        window.localStorage.setItem('accessToken', dataGoogle);
        window.location.reload();
      } else {
        swal('Đã có lỗi xảy ra', errorGoogle, 'error');
      }
    }
  }, [dataGoogle, errorGoogle, statusGoogle]);
  return (
    <form onSubmit={handleSignup}>
      <Box
        px={{ xs: 8, sm: 20 }}
        py={4}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
      >
        <Stack direction='column' spacing={6}>
          <Stack
            textAlign='center'
            alignItems='center'
            direction='column'
            spacing={2}
          >
            <Avatar alt='Logo' src='logo.png' />
            <Typography variant='h4'>Chào mừng bạn đến với PetShop</Typography>
            <Typography color='text.secondary'>
              Đăng ký tài khoản để có trải nghiệm tốt hơn cũng như thuận tiện
              hơn trong việc mua sắm cho thú cưng của bạn
            </Typography>
          </Stack>
          <Stack direction='column' spacing={2}>
            <TextField
              type='text'
              id='name'
              required
              label='Tên'
              variant='outlined'
              size='medium'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <People />
                  </InputAdornment>
                ),
              }}
              onChange={handleNameChange}
              value={name}
            />
            <TextField
              type='email'
              id='email'
              required
              label='Email'
              variant='outlined'
              size='medium'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <AlternateEmail />
                  </InputAdornment>
                ),
              }}
              onChange={handleEmailChange}
              value={email}
            />
            <TextField
              type={isShowPass ? 'text' : 'password'}
              id='password'
              required
              label='Password'
              size='medium'
              variant='outlined'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton sx={{ p: 0 }} onClick={handleShowPass}>
                      {isShowPass ? <VisibilityOff /> : <RemoveRedEye />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={handlePasswordChange}
              value={password}
            />
          </Stack>
          <Stack direction='column' spacing={2}>
            <Button
              type='submit'
              size='large'
              sx={{ boxShadow: 'none' }}
              variant='contained'
              disabled={status === 'pending'}
            >
              {status === 'pending' ? 'Đang đăng ký' : 'Đăng ký'}
            </Button>
            <GoogleLogin
              clientId='268766015201-ds1eonkrlculon8lbb4un79fgoetg9d0.apps.googleusercontent.com'
              onSuccess={responseGoogleSuccess}
              onFailure={responseGoogleFailure}
              render={(renderProps) => (
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  sx={{ color: '#333' }}
                  size='large'
                  variant='outlined'
                >
                  <img
                    alt='google'
                    height={24}
                    width={24}
                    src={google}
                    style={{ marginRight: '16px' }}
                  />
                  Đăng nhập với Google
                </Button>
              )}
            />
          </Stack>
        </Stack>

        <Typography color='text.secondary' sx={{ mt: 4 }} textAlign='center'>
          Bạn đã có tài khoản?{' '}
          <Link
            href='/login'
            onClick={(e) => {
              e.preventDefault();
              navigate('/login');
            }}
            sx={{
              textDecoration: 'none',
            }}
          >
            Đăng nhập
          </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default SignUpForm;
