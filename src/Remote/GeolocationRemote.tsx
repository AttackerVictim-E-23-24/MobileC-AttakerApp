
import axios from 'axios';
import { Config } from './Config';

export const sendGeolocation = async (latitude: number, longitude:number, timeStamp: Date) => {
  try {
    const response = await axios.post(`${Config.baseUrl}/Geolocation`, { latitude, longitude, timeStamp });

    return response.data;
  } catch (error) {
    throw new Error('Error de red o del servidor');
  }
};