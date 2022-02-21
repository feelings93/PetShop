/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

const CardNewRight = (props) => {
  return (
    <Grid
      container
      marginTop='60px'
      flexDirection='row'
      display='flex'
      sx={{
        '&:hover': {
          transform: 'translateY(-10px)',
          transition: 'transform linear 0.5s',
        },
        border: 1,
        borderColor: 'grey.300',
        borderRadius: 2,
        backgroundColor: props.color1,
      }}
    >
      <Grid
        item
        sm={6}
        xs={12}
        width='100%'
        marginTop='25px'
        backgroundColor={props.color1}
        paddingBottom='10px'
      >
        <Box padding='0px 5px 5px 15px'>
          <Typography
            variant='h6'
            component='h2'
            style={{
              color: props.fontcolor1,
              fontSize: '16px',
              fontWeight: 'light',
            }}
          >
            OUR NEWS{' '}
          </Typography>
          <Typography
            variant='h6'
            component='h2'
            style={{
              color: props.title1,
              fontSize: '26px',
              fontWeight: 'bold',
            }}
          >
            TRAVEL EVENTS{' '}
          </Typography>
          <Typography
            sx={{ marginTop: '15px', lineHeight: 2 }}
            width='100%'
            style={{
              color: props.fontcolor1,
              fontSize: '16px',
              fontWeight: 'light',
            }}
          >
            Phasellus enim libero, blandit vel sapien vitae, condimentum
            ultricies magna et. Quisque euismod orci ut et lobortis.{' '}
          </Typography>
          <Button
            sx={{
              borderRadius: '20px',
              padding: '5px 20px 5px 20px',
              marginTop: '20px',
              backgroundColor: props.colorbutton,
              color: props.color1,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: props.colorbutton,
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            variant='contained'
            href='/news'
          >
            READ MORE
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        sm={6}
        xs={12}
        sx={{
          minHeight: '200px',
          backgroundImage: `url(${props.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#f99',
          borderRadius: 2,
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </Grid>
  );
};

export default CardNewRight;
