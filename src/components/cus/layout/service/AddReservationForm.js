import React, { useEffect } from 'react';
import swal from 'sweetalert';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

import { useForm } from 'react-hook-form';
import { createReservation } from '../../../../lib/api/reservation';
import useHttp from '../../../../hooks/use-http';

const AddReservationForm = ({ service, onClose }) => {
  const { register, handleSubmit } = useForm();

  const { data, error, sendRequest, status } = useHttp(createReservation);
  const onSubmit = (data) => {
    sendRequest({
      ...data,
      serviceId: service.id,
    });
  };

  useEffect(() => {
    if (status === 'completed') {
      if (data) {
        swal('Thành công', 'Bạn đã đặt lịch thành công', 'success');
        onClose();
      } else if (error) swal('Thất bại', 'Đã có lỗi xảy ra', 'error');
    }
  }, [data, status, error, onClose]);

  return (
    <Dialog maxWidth='md' open={true}>
      {status === 'pending' && <LinearProgress />}

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Đặt lịch</DialogTitle>
        <DialogContent>
          <Stack mt={1} spacing={2}>
            <TextField
              {...register('customerName')}
              required
              id='customerName'
              label='Tên khách hàng'
            />

            <TextField
              {...register('phoneNumber')}
              required
              id='phoneNumber'
              label='SĐT'
            />

            <TextField
              {...register('reserveDate')}
              required
              id='reserveDate'
              label='Thời gian mong muốn'
              type='datetime-local'
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              {...register('serviceName')}
              required
              id='serviceName'
              label='Loại dịch vụ'
              defaultValue={service.name}
              disabled
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={status === 'pending'}
            variant='contained'
            type='submit'
          >
            {status === 'pending' ? 'Đang đặt...' : 'Đặt lịch'}
          </Button>
          <Button variant='text' onClick={onClose}>
            Hủy bỏ
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddReservationForm;
