
import React, { useState } from 'react';
import { Box } from '@mui/system';
import {
  FormControlLabel,
  FormGroup,
  Rating,
  Grid,
  Button,
  Slider,
  Checkbox,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import { styled } from '@mui/material/styles';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { grey } from '@mui/material/colors';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import ChildCareSharpIcon from '@mui/icons-material/ChildCareSharp';

const Typographyf14light = (props) => {
  return (
    <Typography
      variant='h6'
      component='h2'
      sx={{ fontSize: '14px', fontWeight: 'light' }}
    >
      {props.children}
    </Typography>
  );
};
const Typographyf14medium = (props) => {
  return (
    <Typography
      variant='h6'
      component='h2'
      sx={{ fontSize: '14px', fontWeight: 'medium' }}
    >
      {props.children}
    </Typography>
  );
};
const TypographyMod = (props) => {
  return (
    <Typography
      variant='h6'
      component='h2'
      fontSize={props.fontSize || '18px'}
      fontWeight={props.fontWeight || 'medium'}
    >
      {props.children}
    </Typography>
  );
};
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#00aa6c',
    // color: green[600],
  },
  '& .MuiRating-iconHover': {
    // color: green[600],

    color: '#00aa6c',
  },
  '&.css-dqr9h-MuiRating-label': {
    marginTop: '2px',
  },
});
const labels = {
  0: 'Poor',
  1: 'Terrible',
  2: 'Average',
  3: 'Good',
  4: 'Very Good',
  5: 'Excellent',
};

const TourFilters = () => {
  const [price, setPrice] = useState([40, 100]);
  const [stars, setStars] = useState(4);
  const [childNum, setChildNum] = useState(1);
  const [adultNum, setAdultNum] = useState(1);
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPrice([Math.min(newValue[0], price[1] - 30), price[1]]);
    } else {
      setPrice([price[0], Math.max(newValue[1], price[0] + 30)]);
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '7px',
      }}
    >
      {/* Covid 19 */}
      <Box sx={{ m: 1, ml: 2, mr: 2 }}>
        <TypographyMod fontSize='14px'>
          Bởi vì dịch covid-19, quý khách vui lòng mang khẩu trang khi đến nhé
        </TypographyMod>
      </Box>
      <Divider />
      <Box sx={{ m: 1, ml: 2, mr: 2 }}>
        <TypographyMod sx={{fontSize:'14px', fontWeight:"bold"}}>Danh mục</TypographyMod>
        <FormGroup>
          <FormControlLabel
            control={<Button />}
            label={
              <Typographyf14medium>
                Free cancellation{' '}
                <IconButton sx={{ ml: 1 }}>
                  <ErrorOutlineIcon />
                </IconButton>
              </Typographyf14medium>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typographyf14light>
                Reserve now, pay at stay
                <IconButton sx={{ ml: 1 }}>
                  <ErrorOutlineIcon />
                </IconButton>
              </Typographyf14light>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typographyf14light>
                Properties with special offers
              </Typographyf14light>
            }
          />
        </FormGroup>
      </Box>
      <Divider />
      <Box sx={{ m: 1, ml: 2, mr: 2 }}>
        <TypographyMod fontSize='14px'>Giá</TypographyMod>
        <Box textAlign='center'>
          <TypographyMod fontSize='12px'>
            Từ {price[0]} VNĐ đến {price[1]} VNĐ
          </TypographyMod>
        </Box>
        <Box>
          <Slider
            defaultValue={40}
            onChange={handleChange}
            value={price}
            step={1}
            min={40}
            max={200}
            valueLabelDisplay='auto'
            disableSwap
            sx={{ color: '#00aa6c', ml: 1 }}
          />
        </Box>
      </Box>
      <Divider />
      <Box sx={{ m: 1, ml: 2, mr: 2 }}>
        <TypographyMod fontSize='14px'>Phổ biến</TypographyMod>
        <Box textAlign='center'>
          <TypographyMod fontSize='12px'>{stars} Đánh giá</TypographyMod>
        </Box>
        <Box
          sx={{
            width: 250,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <StyledRating
            name='customized-color'
            defaultValue={stars}
            onChange={(event, value) => setStars(value)}
            precision={1}
            icon={<CircleIcon fontSize='inherit' />}
            emptyIcon={<CircleOutlinedIcon fontSize='inherit' />}
            sx={{ mr: 2 }}
          />
          <TypographyMod fontSize='12px'>{labels[stars]}</TypographyMod>
        </Box>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label={<Typographyf14medium>Sản phẩm mới</Typographyf14medium>}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={<Typographyf14light>Sản phẩm bán chạy</Typographyf14light>}
          />
        </FormGroup>
      </Box>
    </Box>
  );
};

export default TourFilters;
