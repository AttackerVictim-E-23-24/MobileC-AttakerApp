
import axios from 'axios';
import { Config } from './Config';

export const sendMotion = async (timeStamp:Date) => {
  try {
    const response = await axios.post(`${Config.baseUrl}/Motion`, { timeStamp });

    return response.data;
  } catch (error) {
    throw new Error('Error de red o del servidor');
  }
};