// authApi.ts
import axios from 'axios';
import { Config } from './Config';

export const requestLogin = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${Config.baseUrl}/Login`, { username, password });

    return response.data;
  } catch (error) {
    throw new Error('Error de red o del servidor');
  }
};