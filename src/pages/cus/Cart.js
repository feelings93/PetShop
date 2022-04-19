import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import BillCart from '../../components/cus/layout/layoutCart/billCart';
import CardCart from '../../components/cus/layout/layoutCart/cardCart';
import Header from '../../components/cus/layout/navbar/Header';
import TotalCart from '../../components/cus/layout/layoutCart/totalCart';
import ListStep from '../../components/cus/layout/layoutCart/ListStep';
import Page1 from '../../components/cus/layout/layoutCart/Page1';

export default function Cart() {
  return (
    <div>
      <Container fixed>
        <Page1 />
      </Container>
    </div>
  );
}
