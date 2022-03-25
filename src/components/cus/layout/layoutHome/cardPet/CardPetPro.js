/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { React, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { border, Box, fontWeight, ThemeProvider } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// eslint-disable-next-line import/no-unresolved
import { BsCart3 } from 'react-icons/bs';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from '@mui/material/Link';
import './cardpetpro.css';

const CardPetPro = (props) => {
  const [hide, setHide] = useState(false);
  const [color1, setColor1] = useState('#ff6b00');
  const [color2, setColor2] = useState('#f2b203');

  return (
    <Box padding='8px'>
      <Grid
        container
        sm={12}
        sx={{
          height: 300,
          borderRadius: 2,
          boxShadow: 3,
          // eslint-disable-next-line react/prop-types
          backgroundImage: `url(${props.url})`,
          backgroundSize: ' cover',
          backgroundColor: '#f99',
          backgroundPosition: 'center',

          '&:hover': {
            backgroundColor: '#ff6868',

            opacity: [0.9, 0.8, 0.7],
          },
        }}
        className='image'
      >
        <div
          className='image__overlay image__overlay--primary'
          onMouseEnter={() => setHide(true)}
          onMouseLeave={() => setHide(false)}
        >
          <div display='flex' justifyContent='space-around'>
            <IconButton
              aria-label='delete'
              sx={{
                margin: '5px 5px 0px 0px',
                color: '#000000',
                backgroundColor: '#fff',
                borderRadius: 8,
                height: '50px',
                width: '50px',
                '&:hover': {
                  backgroundColor: '#ff3b00',
                },
              }}
            >
              <FavoriteBorderIcon
                sx={{
                  color: '#ff3b00',
                  fontSize: '35px',
                  '&:hover': {
                    color: '#fff',
                  },
                }}
              />
            </IconButton>
            <IconButton
              aria-label='delete'
              sx={{
                margin: '5px 5px 0px 0px',
                color: '#000000',
                backgroundColor: '#fff',
                borderRadius: 8,
                height: '50px',
                width: '50px',
                '&:hover': {
                  backgroundColor: '#ff3b00',
                },
              }}
              href='/san-pham'
            >
              <SavedSearchIcon
                sx={{
                  color: '#ff3b00',
                  fontSize: '35px',
                  '&:hover': {
                    color: '#fff',
                  },
                }}
              />
            </IconButton>
          </div>
          <Button
            variant='contained'
            sx={{
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#ff3b00',
              marginTop: '15px',
              '&:hover': {
                backgroundColor: '#ff3b00',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            endIcon={<BsCart3 />}
          >
            Thêm vào giỏ
          </Button>
        </div>
        <Grid
          container
          item
          sm={12}
          display='flex'
          justifyContent='space-between'
        >
          {props.new === 'true' ? (
            <div className='image__title'>NEW</div>
          ) : (
            <div />
          )}
          {!hide ? (
            <IconButton
              aria-label='delete'
              sx={{
                margin: '5px 5px 0px 0px',
                color: '#000000',
                backgroundColor: '#fff',
                borderRadius: 8,
                height: '50px',
                width: '50px',
              }}
            >
              <FavoriteBorderIcon sx={{ color: '#00000', fontSize: '35px' }} />
            </IconButton>
          ) : (
            <IconButton
              aria-label='delete'
              sx={{
                margin: '5px 5px 0px 0px',
                color: '#000000',
                backgroundColor: '#fff',
                borderRadius: 8,
                height: '50px',
                width: '50px',
                display: 'none',
              }}
            >
              <FavoriteBorderIcon sx={{ color: '#00000', fontSize: '35px' }} />
            </IconButton>
          )}
        </Grid>
      </Grid>

      <Box backgroundColor='#fff' marginTop='5px'>
        <Link
          href='/tours/detailtour'
          underline='none'
          fontWeight='bold'
          fontSize='18px'
          color={color1}
          sx={{
            '&:hover': {
              color: '#c89300',
            },
          }}
        >
          {props.title}
        </Link>
        <Box display='flex' alignItems='center'>
          <IconButton
            aria-label='delete'
            sx={{
              marginRight: '2px',
              backgroundColor: '#00aa6c',
              borderRadius: 8,
              height: '5px',
              width: '5px',
            }}
          />
          <IconButton
            aria-label='delete'
            sx={{
              marginRight: '2px',
              backgroundColor: '#00aa6c',
              borderRadius: 8,
              height: '5px',
              width: '5px',
            }}
          />
          <IconButton
            aria-label='delete'
            sx={{
              marginRight: '2px',
              backgroundColor: '#00aa6c',
              borderRadius: 8,
              height: '5px',
              width: '5px',
            }}
          />
          <IconButton
            aria-label='delete'
            sx={{
              marginRight: '2px',
              backgroundColor: '#00aa6c',
              borderRadius: 8,
              height: '5px',
              width: '5px',
            }}
          />
          <IconButton
            aria-label='delete'
            sx={{
              marginRight: '10px',
              backgroundColor: '#00aa6c',
              borderRadius: 8,
              height: '5px',
              width: '5px',
            }}
          />

          <Typography
            variant='h6'
            gutterBottom
            component='div'
            fontWeight='regular'
            fontSize='13px'
            color='#555555'
            margin='1px 0px 0px 0px'
          >
            1280 đánh giá
          </Typography>
        </Box>
        <Typography
          variant='h6'
          gutterBottom
          component='div'
          fontWeight='medium'
          fontSize='16px'
          color='#555555'
          margin='1px 0px 0px 0px'
        >
          Loại: {props.type}
        </Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography
            variant='h6'
            gutterBottom
            component='div'
            fontWeight='bold'
            fontSize='18px'
            // color='#ff6b00'
            color={color2}
          >
            Giá:
          </Typography>
          <Typography
            variant='h6'
            gutterBottom
            component='div'
            fontWeight='bold'
            fontSize='18px'
            // color='#ff6b00'
            color={color2}
          >
            {props.price}Đ
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardPetPro;
