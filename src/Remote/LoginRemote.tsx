// authApi.ts
import { Config } from './Config';

export const requestLogin = async (username: string, password: string) => {
  const response = await fetch(`${Config.baseUrl}/Login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Error de red o del servidor');
  }

  const data = await response.json();
  return data;
};
