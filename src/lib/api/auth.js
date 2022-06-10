import { axios, bearerHeader } from '../config';

export const login = async ({ email, password }) => {
  try {
    const response = await axios.post('/customer-auth/login', {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const signUp = async ({ email, password, phone, name }) => {
  try {
    const response = await axios.post('/customer-auth/register', {
      email,
      password,
      phone,
      name,
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getProfile = async () => {
  try {
    const response = await axios.get('/customer-auth/profile', {
      headers: {
        Authorization: bearerHeader,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const logout = async () => {
  localStorage.removeItem('accessToken');
  window.location.reload();
};

export const updateProfile = async (data) => {
  try {
    const response = await axios.patch('/customer-auth/profile', data, {
      headers: {
        Authorization: bearerHeader,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const changePassword = async (data) => {
  try {
    const response = await axios.patch('/customer-auth/password', data, {
      headers: {
        Authorization: bearerHeader,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
