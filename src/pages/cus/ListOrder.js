import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Aos from 'aos';
import HeroAbout from '../../components/cus/layout/layoutAbout/HeroAbout';
import TeamSection from '../../components/cus/layout/layoutAbout/TeamSection';
import 'aos/dist/aos.css';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import logo from '../../assets/images/logo.png';
import useHttp from '../../hooks/use-http';
import { getOrders } from '../../lib/api/order';
import LoadingCom from '../../components/LoadingCom';
import { useNavigate } from 'react-router-dom';

export default function ListOrder() {
  const { error, status, sendRequest, data } = useHttp(getOrders, true);
  const [orders, setOrders] = React.useState([]);
  let navigate = useNavigate();
  React.useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  React.useEffect(() => {
    if (status === 'completed' && data) {
      setOrders(
        data?.filter((e) => e?.customerName == localStorage.getItem('userName'))
      );
    }
  }, [status, data]);
  if (status === 'pending') return <LoadingCom />;
  if (error) return <h1>Đã có lỗi xảy ra</h1>;

  return (
    <Container fixed>
      {orders.map((order) => {
        return (
          <div
            style={{
              backgroundColor: '#f7faff',
              marginTop: '10px',
              cursor: 'pointer',
            }}
            onClick={() => navigate(`/don-hang/${order?.id}`)}
          >
            <hr width='100%' align='center' color='#dadada' />

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0px 40px',
              }}
            >
              <Box display='flex' alignItems='center'>
                <Box
                  sx={{
                    height: '80px',
                    width: '80px',
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundImage: `url(${logo})`,
                    backgroundSize: ' cover',
                    backgroundPosition: 'center',
                  }}
                />
                <Box marginLeft='5px'>
                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontWeight: 'regular',
                      marginBottom: '10px',
                    }}
                  >
                    Mã đơn:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      marginBottom: '10px',
                      marginLeft: '10px',
                      //   color: `${data?.paymentStatus ? 'red' : 'green'}`,
                    }}
                  >
                    {order?.id}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 'regular',
                    marginBottom: '10px',
                  }}
                >
                  Ngày đặt đơn
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 'regular',
                    marginBottom: '10px',
                    // color: `${data?.paymentStatus ? 'red' : 'green'}`,
                    color: 'white',
                    backgroundColor: '#b9b9b9',
                    borderRadius: '15px',
                    textAlign: 'center',
                    padding: '0px 10px',
                  }}
                >
                  {new Date(order?.orderDate).toLocaleString()}.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 'regular',
                    marginBottom: '10px',
                  }}
                >
                  Tình trạng đơn hàng:
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 'regular',
                    marginBottom: '10px',
                    marginLeft: '10px',
                    // color: `${data?.paymentStatus ? 'red' : 'green'}`,
                    color: 'white',
                    backgroundColor: '#1077ec',
                    borderRadius: '15px',
                    textAlign: 'center',
                    padding: '0px 10px',
                  }}
                >
                  {order?.status}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 'regular',
                    marginBottom: '10px',
                  }}
                >
                  Thanh toán:
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 'regular',
                    marginBottom: '10px',
                    padding: '0px 10px',
                    color: 'white',
                    backgroundColor: `${
                      order?.paymentStatus == 'Chưa thanh toán'
                        ? 'red'
                        : 'green'
                    }`,
                    borderRadius: '15px',
                    textAlign: 'center',
                  }}
                >
                  {order?.paymentStatus}
                </Typography>
              </Box>
            </div>
          </div>
        );
      })}
      ;
    </Container>
  );
}
