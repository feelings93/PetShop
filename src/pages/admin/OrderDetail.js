import React, { useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import StatusCard from '../../components/admin/order-detail/StatusCard';
import { getOrder } from '../../lib/api/order';
import CustomerProfile from '../../components/admin/order-detail/CustomerProfile';
import PaymentInfo from '../../components/admin/order-detail/PaymentInfo';
import ProductList from '../../components/admin/order-detail/ProductList';

const OrderDetail = () => {
  const params = useParams();
  const { sendRequest, status, data, error } = useHttp(getOrder, true);

  useEffect(() => {
    sendRequest(params.id);
  }, []);
  if (status === 'pending') return <h1>Loading</h1>;
  if (!data || error) return <h1>Đã có lỗi xảy ra</h1>;
  return (
    <Stack spacing={4}>
      <StatusCard order={data} />
      <ProductList order={data} />
      <Grid container>
        <Grid item md={6} sm={12}>
          <CustomerProfile order={data} />
        </Grid>

        <Grid item md={6} sm={12}>
          <PaymentInfo order={data} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default OrderDetail;
