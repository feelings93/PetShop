import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
  React.useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return <h1>Service</h1>;
};

export default Service;
