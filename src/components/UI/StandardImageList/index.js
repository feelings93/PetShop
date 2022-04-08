import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PropTypes from 'prop-types';
const StandardImageList = ({ urls }) => {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {urls.map((item, index) => (
        <ImageListItem key={index}>
          <img src={item} srcSet={item} loading='lazy' />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
StandardImageList.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default StandardImageList;
