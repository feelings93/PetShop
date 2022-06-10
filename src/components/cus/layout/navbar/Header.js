import React, { useContext } from 'react';
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
import Logo from './Logo';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartNof from './CartHeader';
import { PetCartContext } from '../../../../store/petCart-context';
import { AuthContext } from '../../../../store/auth-context';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
function ElevationScroll(props) {
  const { children, window } = props;

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

  const petCartCtx = useContext(PetCartContext);
  const { items } = petCartCtx;
  const authCtx = useContext(AuthContext);
  const { user, setUser } = authCtx;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const settings = ['Thông tin', 'Đơn hàng', 'Đăng xuất'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };
  const handleCheckUserMenu = (setting) => {
    switch (setting) {
      case 'Thông tin':
        console.log('0');
        break;
      case 'Đơn hàng':
        console.log(1);
        break;
      case 'Đăng xuất':
        console.log(2);
        localStorage.setItem('isLogin', false);
        window.location.reload();
        break;
      default:
        break;
    }
  };
  const open = Boolean(anchorEl);
  const drawer = (
    <div>
      <Toolbar>
        <Logo />
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
          to='/san-pham '
          className={classes.link}
        >
          Sản phẩm
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
              setOpenSignup(false);
            }}
            variant='outlined'
            sx={{ backgroundColor: '#ff6b00' }}
          >
            Đăng nhập1
          </Button>

          <Button
            fullWidth
            onClick={() => {
              setOpenLogin(false);

              setOpenSignup(true);
            }}
            variant='contained'
          >
            Đăng ký1
          </Button>
          <CartNof countItem={items.length} />
        </Stack>
      )}
      {localStorage.getItem('isLogin') === true && (
        <Stack
          mt={2}
          sx={{ paddingLeft: '20px', paddingRight: '20px' }}
          direction='column'
          spacing={1}
        >
          <Button
            fullWidth
            onClick={() => {
              localStorage.setItem('isLogin', false);
              window.location.reload();
            }}
            variant='outlined'
          >
            Đăng xuất
          </Button>
          <CartNof countItem={items.length} />
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
                <Logo />
              </Stack>
              <Stack
                sx={{ mr: 4, display: { xs: 'none', lg: 'flex' } }}
                alignItems='center'
                direction='row'
                spacing={4}
              >
                <NavLink
                  to='/trang-chu'
                  className={({ isActive }) =>
                    !isActive
                      ? classes.link
                      : `${classes.link} ${classes['link--active']}`
                  }
                >
                  Trang chủ
                </NavLink>
                <NavLink
                  to='/thu-cung'
                  className={({ isActive }) =>
                    !isActive
                      ? classes.link
                      : `${classes.link} ${classes['link--active']}`
                  }
                >
                  Thú cưng
                </NavLink>
                <NavLink
                  to='/san-pham'
                  className={({ isActive }) =>
                    !isActive
                      ? classes.link
                      : `${classes.link} ${classes['link--active']}`
                  }
                >
                  Sản phẩm
                </NavLink>
                <NavLink
                  to='/dich-vu'
                  className={({ isActive }) =>
                    !isActive
                      ? classes.link
                      : `${classes.link} ${classes['link--active']}`
                  }
                >
                  Dịch vụ
                </NavLink>
                <NavLink
                  to='/lien-he'
                  className={({ isActive }) =>
                    !isActive
                      ? classes.link
                      : `${classes.link} ${classes['link--active']}`
                  }
                >
                  Liên hệ
                </NavLink>
                <NavLink
                  to='/faqs'
                  className={({ isActive }) =>
                    !isActive
                      ? classes.link
                      : `${classes.link} ${classes['link--active']}`
                  }
                >
                  FAQ
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    !isActive
                      ? classes.link
                      : `${classes.link} ${classes['link--active']}`
                  }
                  to='/tin-tuc'
                >
                  Tin tức
                </NavLink>
              </Stack>
              {localStorage.getItem('isLogin') == 'false' && (
                <Stack direction='row' spacing={1}>
                  <Button
                    onClick={() => {
                      setOpenLogin(true);
                      setOpenSignup(false);
                    }}
                    variant='outlined'
                  >
                    Đăng nhập
                  </Button>
                  <Button
                    onClick={() => {
                      setOpenSignup(true);
                      setOpenLogin(false);
                      console.log('Click ', openSignup);
                    }}
                    variant='contained'
                  >
                    Đăng ký
                  </Button>
                  <CartNof countItem={items.length} />
                </Stack>
              )}
              {localStorage.getItem('isLogin') == 'true' && (
                <Stack direction='row' spacing={1}>
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title='Mở rộng tính năng'>
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt='Hao' src='/static/images/avatar/2.jpg' />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id='menu-appbar'
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {settings.map((setting) => (
                        <MenuItem
                          key={setting}
                          onClick={() => handleCheckUserMenu(setting)}
                        >
                          <Typography textAlign='center'>{setting}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                  {/* <Button
                    fullWidth
                    onClick={() => {
                      localStorage.removeItem('isLogin');
                      // window.location.reload();
                    }}
                    variant='outlined'
                  >
                    Đăng xuất
                  </Button> */}
                  <CartNof countItem={items.length} />
                </Stack>
              )}
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
