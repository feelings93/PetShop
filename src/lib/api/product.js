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
  const formData = new FormData();
  console.log(Product);

  formData.append('name', Product.name);
  formData.append('price', Product.price);
  formData.append('quantity', Product.quantity);
  for (let i = 0; i < Product.selectedCategories.length; i++) {
    formData.append(
      'selectedCategories[]',
      JSON.stringify(Product.selectedCategories[i])
    );
  }
  for (let i = 0; i < Product.files.length; i++) {
    formData.append('files', Product.files[i]);
  }
  formData.append('status', 'Còn hàng');
  try {
    const response = await axios.post(`/products`, formData, {
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
