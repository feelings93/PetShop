import { axios, bearerHeader } from '../config';

export const createReservation = async (reservation) => {
    try {
      const response = await axios.post(`/reservations`, reservation, {
        headers: {
          Authorization: bearerHeader,
        },
      });
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  };