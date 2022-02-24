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
  RemoveRedEye,
  VisibilityOff,
} from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import swal from 'sweetalert';
import google from '../../assets/images/google.png';
import useHttp from '../../hooks/use-http';
import Api from '../../lib/api';

const LoginForm = () => {
  const { data, error, status, sendRequest } = useHttp(Api.login);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isShowPass, setIsShowPass] = React.useState(false);

  const handleShowPass = () => {
    setIsShowPass((prev) => !prev);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    sendRequest({ email, password });
  };
  React.useEffect(() => {
    if (status === 'completed') {
      if (!error) {
        window.localStorage.setItem('accessToken', data);
      } else {
        swal('Đã có lỗi xảy ra', error, 'error');
      }
    }
  }, [data, error, status]);

  return (
    <form onSubmit={handleLogin}>
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
              Đăng nhập để có trải nghiệm tốt hơn cũng như trong việc mua sắm
              cho thú cưng của bạn
            </Typography>
          </Stack>
          <Stack direction='column' spacing={2}>
            <TextField
              type='email'
              id='email'
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
            />
            <TextField
              type={isShowPass ? 'text' : 'password'}
              id='password'
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
            />
            <Box display='flex' direction='row' justifyContent='flex-end'>
              <Link href='/forgot' underline='none'>
                Quên mật khẩu?
              </Link>
            </Box>
          </Stack>
          <Stack direction='column' spacing={2}>
            <Button
              type='submit'
              size='large'
              sx={{ boxShadow: 'none' }}
              variant='contained'
              disabled={status === 'pending'}
            >
              {status === 'pending' ? 'Đang đăng nhập' : 'Đăng nhập'}
            </Button>
            <Button sx={{ color: '#333' }} size='large' variant='outlined'>
              <img
                alt='google'
                height={24}
                width={24}
                src={google}
                style={{ marginRight: '16px' }}
              />
              Đăng nhập với Google
            </Button>
          </Stack>
        </Stack>

        <Typography color='text.secondary' sx={{ mt: 4 }} textAlign='center'>
          Bạn chưa có tài khoản?{' '}
          <Link href='/signup' underline='none'>
            Đăng ký
          </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default LoginForm;
