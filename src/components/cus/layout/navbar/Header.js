/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import AppBar from '@mui/material/AppBar';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { NavLink, useNavigate } from 'react-router-dom';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { MdPets } from 'react-icons/md';
import SignupPopup from '../popup/SignupPopup';
import LoginPopup from '../popup/LoginPopup';
import classes from './Header.module.css';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
    sx: trigger
      ? {
          background: 'white',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        }
      : {
          background: 'transparent',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Header = (props) => {
  const navigate = useNavigate();

  const drawerWidth = 240;
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignup, setOpenSignup] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const drawer = (
    <div>
      <Toolbar>
        <Typography
          sx={{ fontWeight: 700, cursor: 'pointer', color: '#ff6b00' }}
          variant='h5'
          component='span'
          className={classes.logo}
          onClick={() => {
            //  history.push('/');
          }}
        >
          Pet Family
          <MdPets marginLeft='5px' color='#ff6b00' />
        </Typography>
      </Toolbar>

      <Divider />
      <Stack
        sx={{ padding: '20px', paddingTop: 0 }}
        mt={2}
        // alignItems="center"
        direction='column'
        spacing={4}
        className={classes['nav-bar']}
      >
        <NavLink
          to='/trang-chu'
          activeClassName={classes['link--active']}
          className={classes.link}
        >
          Trang chủ
        </NavLink>
        <NavLink
          activeClassName={classes['link--active']}
          to='/thu-cung'
          className={classes.link}
        >
          Thú cưng
        </NavLink>
        <NavLink
          activeClassName={classes['link--active']}
          to='/phu-kien '
          className={classes.link}
        >
          Phụ kiện
        </NavLink>
        <NavLink
          activeClassName={classes['link--active']}
          to='/dich-vu'
          className={classes.link}
        >
          Dịch vụ
        </NavLink>
        <NavLink
          activeClassName={classes['link--active']}
          to='/gioi-thieu'
          className={classes.link}
        >
          Giới thiệu
        </NavLink>
        <NavLink
          activeClassName={classes['link--active']}
          to='/lien-he'
          className={classes.link}
        >
          Liên hệ
        </NavLink>
        <NavLink
          activeClassName={classes['link--active']}
          to='/faqs'
          className={classes.link}
        >
          FAQ
        </NavLink>
        <NavLink
          activeClassName={classes['link--active']}
          to='/thu-vien-anh'
          className={classes.link}
        >
          Thư viện ảnh
        </NavLink>
        <NavLink
          activeClassName={classes['link--active']}
          to='/tin-tuc'
          className={classes.link}
        >
          Tin tức
        </NavLink>
      </Stack>
      <Divider />
      {!localStorage.getItem('isLogin') === true && (
        <Stack
          mt={2}
          sx={{ paddingLeft: '20px', paddingRight: '20px' }}
          direction='column'
          spacing={1}
        >
          <Button
            fullWidth
            onClick={() => {
              setOpenLogin(true);
            }}
            variant='outlined'
            sx={{ backgroundColor: '#ff6b00' }}
          >
            Đăng nhập
          </Button>

          <Button fullWidth href='/sign-up' variant='contained'>
            Đăng ký
          </Button>
        </Stack>
      )}
      {localStorage.getItem('isLogin') && (
        <Stack
          mt={2}
          sx={{ paddingLeft: '20px', paddingRight: '20px' }}
          direction='column'
          spacing={1}
        >
          <Button
            fullWidth
            onClick={() => {
              localStorage.removeItem('isLogin');
              window.location.reload();
            }}
            variant='outlined'
          >
            Đăng xuất
          </Button>
        </Stack>
      )}
    </div>
  );
  const container =
    // eslint-disable-next-line react/destructuring-assignment
    props.window !== undefined ? () => props.window().document.body : undefined;
  return (
    <ScopedCssBaseline>
      <ElevationScroll {...props}>
        <AppBar
        // color=""
        //   sx={{
        //     background: "white",
        //     transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        //   }}
        >
          <Container maxWidth='lg'>
            <Toolbar sx={{ justifyContent: 'space-between' }} disableGutters>
              <Stack alignItems='center' spacing={1} direction='row'>
                <IconButton
                  color='default'
                  aria-label='open drawer'
                  edge='start'
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { lg: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  sx={{ fontWeight: 700, cursor: 'pointer', color: '#ff6b00' }}
                  variant='h5'
                  component='span'
                  className={classes.logo}
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  Pet Family
                  <MdPets style={{ marginLeft: '5px' }} />
                </Typography>
              </Stack>
              <Box display='flex' alignItems='center'>
                <Stack
                  sx={{ mr: 4, display: { xs: 'none', lg: 'flex' } }}
                  alignItems='center'
                  direction='row'
                  spacing={4}
                >
                  <NavLink
                    to='/trang-chu'
                    activeClassName={classes['link--active']}
                    className={classes.link}
                  >
                    Trang chủ
                  </NavLink>
                  <NavLink
                    activeClassName={classes['link--active']}
                    to='/thu-cung'
                    className={classes.link}
                  >
                    Thú cưng
                  </NavLink>
                  <NavLink
                    activeClassName={classes['link--active']}
                    to='/phu-kien '
                    className={classes.link}
                  >
                    Phụ kiện
                  </NavLink>
                  <NavLink
                    activeClassName={classes['link--active']}
                    to='/dich-vu'
                    className={classes.link}
                  >
                    Dịch vụ
                  </NavLink>
                  <NavLink
                    activeClassName={classes['link--active']}
                    to='/gioi-thieu'
                    className={classes.link}
                  >
                    Giới thiệu
                  </NavLink>
                  <NavLink
                    activeClassName={classes['link--active']}
                    to='/lien-he'
                    className={classes.link}
                  >
                    Liên hệ
                  </NavLink>
                  <NavLink
                    activeClassName={classes['link--active']}
                    to='/faqs'
                    className={classes.link}
                  >
                    FAQ
                  </NavLink>

                  <NavLink
                    activeClassName={classes['link--active']}
                    to='/tin-tuc'
                    className={classes.link}
                  >
                    Tin tức
                  </NavLink>
                  {!localStorage.getItem('isLogin') === true && (
                    <Stack direction='row' spacing={1}>
                      <Button
                        onClick={() => {
                          setOpenLogin(true);
                        }}
                        variant='outlined'
                        sx={{
                          color: '#ff6b00',
                          borderColor: '#ff6b00',
                          '&:hover': {
                            borderColor: '#ff6b00',
                            opacity: [0.9, 0.8, 0.7],
                          },
                        }}
                      >
                        Đăng nhập
                      </Button>
                      <Button
                        onClick={() => {
                          setOpenSignup(true);
                        }}
                        variant='contained'
                        sx={{
                          backgroundColor: '#ff6b00',
                          '&:hover': {
                            backgroundColor: '#ff6b00',
                            opacity: [0.9, 0.8, 0.7],
                          },
                        }}
                      >
                        Đăng ký
                      </Button>
                    </Stack>
                  )}
                </Stack>
                {localStorage.getItem('isLogin') && (
                  <>
                    <Avatar
                      alt='Remy Sharp'
                      onClick={handlePopoverOpen}
                      sx={{ width: 32, height: 32, cursor: 'pointer' }}
                      src='https://vnn-imgs-f.vgcloud.vn/2020/04/13/23/suzy-tinh-dau-quoc-dan-so-huu-khoi-tai-san-chuc-trieu-do.jpg'
                    />
                    <Popover
                      id='mouse-over-popover'
                      open={open}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      onClose={handlePopoverClose}
                      disableRestoreFocus
                    >
                      <Stack spacing={1} sx={{ width: '150px' }}>
                        <Button
                          href='/profile'
                          onClick={(event) => {
                            event.preventDefault();
                            navigate('/profile');
                          }}
                          variant='text'
                          sx={{
                            color: '#555',
                            textTransform: 'none',
                            fontWeight: 300,
                            justifyContent: 'flex-start',
                            paddingLeft: '20px',
                          }}
                        >
                          <i
                            style={{ marginRight: '8px' }}
                            className='far fa-user-circle'
                          />
                          Profile
                        </Button>
                        <Button
                          href='/order'
                          onClick={(event) => {
                            event.preventDefault();
                            navigate('/order');
                          }}
                          variant='text'
                          sx={{
                            color: '#555',
                            textTransform: 'none',
                            fontWeight: 300,
                            justifyContent: 'flex-start',
                            paddingLeft: '20px',
                          }}
                        >
                          <i
                            style={{ marginRight: '8px' }}
                            className='fas fa-history'
                          />
                          History
                        </Button>
                        <Button
                          href='/all-reviews'
                          onClick={(event) => {
                            event.preventDefault();
                            navigate('/all-reviews');
                          }}
                          variant='text'
                          sx={{
                            color: '#555',
                            textTransform: 'none',
                            fontWeight: 300,
                            justifyContent: 'flex-start',
                            paddingLeft: '20px',
                          }}
                        >
                          <i
                            style={{ marginRight: '8px' }}
                            className='far fa-edit'
                          />
                          Write Review
                        </Button>
                        <Button
                          onClick={() => {
                            localStorage.removeItem('isLogin');
                            window.location.reload();
                          }}
                          variant='text'
                          sx={{
                            color: '#555',
                            textTransform: 'none',
                            fontWeight: 300,
                            justifyContent: 'flex-start',
                            paddingLeft: '20px',
                          }}
                        >
                          <i
                            style={{ marginRight: '8px' }}
                            className='fas fa-sign-out-alt'
                          />
                          Log Out
                        </Button>
                      </Stack>
                    </Popover>
                  </>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box sx={{ height: '64px' }} />
      {openLogin && (
        <LoginPopup
          open={openLogin}
          onClose={() => {
            setOpenLogin(false);
          }}
        />
      )}
      {openSignup && (
        <SignupPopup
          open={openSignup}
          onClose={() => {
            setOpenSignup(false);
          }}
        />
      )}
    </ScopedCssBaseline>
  );
};
Header.propTypes = {
  // eslint-disable-next-line react/require-default-props
  window: PropTypes.func,
};
export default Header;
