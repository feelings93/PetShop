import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import './LoginPopup.css';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { LinearProgress } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import { FcGoogle } from 'react-icons/fc';
import SignupPopup from './SignupPopup';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useHttp from '../../../../hooks/use-http';
// import { useAuth } from './hooks/use-auth';
import { CustomerContext } from '../../../../store/customer-context';
import LoadingCom from '../../../LoadingCom';
import { login } from '../../../../lib/api/auth';
import { AuthContext } from '../../../../store/auth-context';

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction='up' ref={ref} {...props} />;
});
const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
export default function FormDialog(props) {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const handleClose = (event, reason) => {
    setOpenSnackbar(false);
  };

  const [email, setEmail] = React.useState(null);
  const [emailValidate, setEmailValidate] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [passwordValidate, setPasswordValidate] = React.useState(null);
  const [isOpenSignIn, setIsOpenSignIn] = React.useState(props?.open);
  const { handleSubmit, register } = useForm();
  const { data, error, status, sendRequest } = useHttp(login);

  const authCtx = useContext(AuthContext);
  const { user, setUser } = authCtx;
  React.useEffect(() => {
    if (status === 'completed') {
      if (!error) {
        // console.log(useAuth());
        console.log(data);
        if (data) {
          console.log(123);
          console.log(user);
          swal('Thành công', 'Đăng nhập thành công', 'success');
          window.localStorage.setItem('accessToken', data.accessToken);
          window.localStorage.setItem('userId', data.user.id);
          window.localStorage.setItem('isLogin', true);
          window.location.reload();
        }
      } else {
        swal('Đã có lỗi xảy ra', error, 'error');
      }
    }
  }, [data, status, error]);

  const [openSignup, setOpenSignup] = React.useState(false);
  // React.useEffect(() => {
  //   if (status === 'completed') {
  //     window.location.reload();
  //     localStorage.setItem('isLogin', true);
  //   }
  // }, [status, props]);
  React.useEffect(() => {
    if (password == null) {
      setPasswordValidate(true);
      return;
    }
    if (String(password).length >= 6 && String(password).length <= 20)
      setPasswordValidate(true);
    else setPasswordValidate(false);
  }, [password]);
  React.useEffect(() => {
    if (email == null) {
      setEmailValidate(true);
      return;
    }
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )
      setEmailValidate(true);
    else setEmailValidate(false);
  }, [email]);

  const onSubmit = (value) => {
    console.log(value);
    if (
      emailValidate &&
      passwordValidate &&
      email != null &&
      password != null
    ) {
      sendRequest(value);
    }
  };
  return (
    <Dialog
      open={isOpenSignIn}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.onClose}
      maxWidth='xs'
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: 'white',
          borderStyle: 'none',
          borderColor: '#808080',
          borderWidth: 2,
          borderRadius: 30,
        },
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {status === 'pending' && <LinearProgress />}
        <DialogTitle>
          <Typography
            variant='subtitle1'
            align='center'
            style={{ color: '#808080', fontWeight: 'bo  ld' }}
          >
            XIN CHÀO
          </Typography>

          <Typography
            variant='h5'
            align='center'
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: '24px',
              paddingBottom: '10px',
            }}
          >
            Đăng nhập tài khoản
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ padding: '0px 40px' }}>
          <Typography
            style={{
              color: 'black',
              paddingBottom: '5px',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            E-mail
          </Typography>
          <input
            {...register('email')}
            className='form__input'
            type='email'
            id='email'
            name='email'
            placeholder='Nhập vào email của bạn
            '
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {emailValidate === false && (
            <Box pt={1}>
              <Typography fontSize={15} color='red'>
                Ví dụ: Foodroad@gmail.com
              </Typography>
            </Box>
          )}
          <Typography
            style={{
              color: 'black',
              paddingBottom: '5px',
              fontSize: '16px',
              fontWeight: 'bold',
              marginTop: '10px',
            }}
          >
            Mật khẩu
          </Typography>
          <input
            {...register('password')}
            className='form__input'
            type='password'
            minLength={6}
            id='password'
            name='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {passwordValidate === false && (
            <Box pt={1}>
              <Typography fontSize={15} color='red'>
                Mật khẩu phải từ 6-20 ký tự
              </Typography>
            </Box>
          )}

          <Button
            variant='contained'
            fullWidth
            type='submit'
            style={{
              height: '50px',
              textTransform: 'none',
              fontSize: '20px',
              fontWeight: 'bold',
              borderRadius: '24px',
              marginTop: '20px',
            }}
          >
            Đăng nhập
          </Button>
          <Box pt='10px' pb='20px'>
            <Divider sx={{ color: '#808080', fontSize: '14px' }}>
              {' '}
              hoặc Đăng nhập với{' '}
            </Divider>
          </Box>
          <Box>
            <Stack spacing='15px'>
              <Button
                variant='contained'
                fullWidth
                style={{
                  height: '50px',
                  textTransform: 'none',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  borderRadius: '24px',
                  backgroundColor: '#fff',
                  color: 'black',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                {/* <Box pr='10px'>
                  <i className='fab fa-google fa-x' />
                </Box> */}
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    padding: '0 10px',
                  }}
                >
                  <FcGoogle />
                </Box>
                Google
              </Button>
              {/* <Button
                variant='contained'
                fullWidth
                style={{
                  height: '50px',
                  textTransform: 'none',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  borderRadius: '24px',
                  backgroundColor: 'black',
                }}
              >
                <Box pr='10px'>
                  <i className='fab fa-apple fa-lg' />
                </Box>
                Apple
              </Button> */}
            </Stack>

            <Box p='10px' pt='20px' display='flex' justifyContent='center'>
              <Box pr='5px'>
                <Typography variant='subtitle5' style={{ color: '#808080' }}>
                  Chưa đăng ký ?
                </Typography>
              </Box>
              <a
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setOpenSignup(true);
                }}
              >
                Tạo tài khoản mới
              </a>
            </Box>
          </Box>
        </DialogContent>
        <SignupPopup
          open={openSignup}
          onClose={() => {
            setOpenSignup(false);
          }}
        />
        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity='success'
            sx={{ width: '100%' }}
          >
            Successfully signed up!
          </Alert>
        </Snackbar>
      </form>
    </Dialog>
  );
}
