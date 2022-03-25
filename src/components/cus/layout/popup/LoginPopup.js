/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
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

const Transition = React.forwardRef((props, ref) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction='up' ref={ref} {...props} />;
});
const Alert = React.forwardRef((props, ref) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});
const sleep = (milliseconds) => {
  // eslint-disable-next-line no-promise-executor-return
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

  // eslint-disable-next-line no-shadow
  function CheckValidate(email, password) {
    if (emailValidate && passwordValidate && email != null && password != null)
      // eslint-disable-next-line no-use-before-define
      loginHandler();
  }

  const [openSignup, setOpenSignup] = React.useState(false);
  const [status, setStatus] = React.useState(null);
  const loginHandler = async () => {
    setStatus('loading');
    await sleep(5000);
    setStatus('completed');
  };
  React.useEffect(() => {
    if (status === 'completed') {
      window.location.reload();
      localStorage.setItem('isLogin', true);
    }
  }, [status, props]);
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
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )
      setEmailValidate(true);
    else setEmailValidate(false);
  }, [email]);

  return (
    <Dialog
      // eslint-disable-next-line react/prop-types
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      // eslint-disable-next-line react/prop-types
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
      <form
        onSubmit={(event) => {
          event.preventDefault();
          CheckValidate(email, password);
        }}
      >
        {status === 'loading' && <LinearProgress />}
        <DialogTitle>
          <Typography
            variant='subtitle1'
            align='center'
            style={{ color: '#808080', fontWeight: 'bold' }}
          >
            WELCOME
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
            Log into your account
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
            E-mail or Username
          </Typography>
          <input
            className='form__input'
            type='email'
            id='Email'
            name='email'
            placeholder='Enter your e-mail or username'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {emailValidate === false && (
            <Box pt={1}>
              <Typography fontSize={15} color='red'>
                Example: Foodroad@gmail.com
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
            Password
          </Typography>
          <input
            className='form__input'
            type='password'
            minLength={6}
            id='Password'
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
                Password must be between 6-20 characters
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
            Log In
          </Button>
          <Box pt='10px' pb='20px'>
            <Divider sx={{ color: '#808080', fontSize: '14px' }}>
              {' '}
              or Sign In with{' '}
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
                  Not registered yet?
                </Typography>
              </Box>
              <a
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setOpenSignup(true);
                }}
              >
                Create an Account
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