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

  const petCartCtx = useContext(PetCartContext);
  const { items } = petCartCtx;

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
            }}
            variant='outlined'
            sx={{ backgroundColor: '#ff6b00' }}
          >
            Đăng nhập
          </Button>

          <Button fullWidth href='/sign-up' variant='contained'>
            Đăng ký
          </Button>
          <CartNof countItem={items.length} />
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

              <Stack direction='row' spacing={1}>
                <Button
                  onClick={() => {
                    setOpenLogin(true);
                  }}
                  variant='outlined'
                >
                  Đăng nhập
                </Button>
                <Button
                  onClick={() => {
                    setOpenSignup(true);
                  }}
                  variant='contained'
                >
                  Đăng ký
                </Button>
                <CartNof countItem={items.length} />
              </Stack>
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
