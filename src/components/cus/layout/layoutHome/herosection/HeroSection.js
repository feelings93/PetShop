import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import classes from './HeroSection.module.css';

const HeroSection = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [color1, setColor1] = React.useState('#ff6b00');
  const [color2, setColor2] = React.useState('#f2b203');

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <section className={classes.section}>
      <Container fixed>
        <Grid
          container
          sx={{
            overflow: 'hidden',
            margin: '0 auto ',
            padding: '40px 0',
          }}
        >
          <Grid
            item
            md={6}
            sx={{
              margin: 'auto 0',
              padding: '16px',
            }}
          >
            <Stack spacing={2}>
              <Typography variant='h3' sx={{ fontWeight: 700 }}>
                Trải nghiệm thú cưng tại Pet Family
              </Typography>
              <Typography
                color='text.secondary'
                variant='subtitle1'
                sx={{ fontWeight: 500 }}
              >
                Chuyên bán và cung cấp các dịch vụ chăm sóc, spa về thú cưng
                đứng đầu toàn quốc
              </Typography>

              <Stack direction='row' spacing={2}>
                <Button
                  href='/tours'
                  onClick={(event) => {
                    event.preventDefault();
                    navigate('/tours');
                  }}
                  size='large'
                  variant='contained'
                >
                  Khám phá thú cưng
                </Button>
                <Button
                  onClick={handleToggle}
                  variant='outlined'
                  size='large'
                >
                  {/* <i
                    class='far fa-play-circle'
                    style={{ marginRight: '4px' }}
                  ></i> */}
                  Video giới thiệu
                </Button>
                {open && (
                  <Backdrop
                    sx={{
                      color: '#fff',
                      margin: '0 !important',
                      zIndex: (theme) => theme.zIndex.drawer + 1000,
                    }}
                    // eslint-disable-next-line react/jsx-boolean-value
                    open={true}
                    onClick={handleClose}
                  >
                    {/* <iframe
                      width='560'
                      height='315'
                      src='https://www.youtube.com/embed/SJgSeFkihVE'
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowfullscreen
                    ></iframe> */}
                  </Backdrop>
                )}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} sx={{ padding: '16px' }}>
            <Grid container rowSpacing={1} columnSpacing={2}>
              <Grid item xs={12} sm={6} md={5}>
                <img
                  alt='img'
                  src='https://images.ctfassets.net/gshi3wijcp49/3nfL342IPobgNtz2zrSWx4/fdc43c69c807599967a47944fc7162ed/brand-pet.jpg'
                  className={classes['hero-img']}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={7}>
                <img
                  alt='img'
                  src='https://pureecoindia.in/wp-content/uploads/2020/12/Suited-up-dog-cat-against-mustard-yellow-background-Pure-Eco-India.jpg'
                  className={classes['hero-img']}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={7}>
                <img
                  alt='img'
                  src='https://www.singlecare.com/blog/wp-content/uploads/2021/05/Blog_052821_Where_to_fill_pet_prescriptions-941x529.png'
                  className={classes['hero-img']}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <img
                  alt='img'
                  src='https://media.gettyimages.com/photos/cats-and-dogs-behind-the-orange-color-desk-picture-id1202352164?b=1&k=20&m=1202352164&s=170667a&w=0&h=4xYdbGa-e7Gu7T1LcMS9rj-jOFhBEpdy2BohQK70DWk='
                  className={classes['hero-img']}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HeroSection;
