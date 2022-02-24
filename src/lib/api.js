import axios from 'axios';

const SERVER = 'http://localhost:5000/api';
const instance = axios.create({
  baseURL: SERVER,
});

export default class Api {
  static async login({ email, password }) {
    try {
      const response = await instance.post(
        '/auth/login',
        { email, password },
        {}
      );
      return response.data.accessToken;
    } catch (err) {
      throw new Error(err);
    }
  }
}
