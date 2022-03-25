import { axios, bearerHeader } from '../config';

export const getProducts = async () => {
  try {
    const response = await axios.get('/products', {
        headers: {
            Authorization: bearerHeader,
          },
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const createProduct = async (Product) => {
  try {
    const response = await axios.post(`/products`, Product, {
      headers: {
        Authorization: bearerHeader,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const editProduct = async (Product) => {
  try {
    const response = await axios.patch(`/products/${Product.id}`, Product, {
      headers: {
        Authorization: bearerHeader,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const delProduct = async (Product) => {
    try {
      const response = await axios.delete(`/products/${Product.id}`, Product, {
        headers: {
          Authorization: bearerHeader,
        },
      });
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  };
