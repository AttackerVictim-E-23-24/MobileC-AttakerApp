// authApi.ts
/*
const baseUrl = 'https://tu-api.com/auth';

export const requestLogin = async (username: string, password: string) => {
  const response = await fetch(`${baseUrl}/login`, {
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
};*/

export const requestLogin = async (username: string, password: string) => {
    // Simulate a delay of 2 seconds
    return new Promise(resolve => setTimeout(() => {
      if (username === 'Attacker' && password === 'Attacker') {
        // Redirigir al usuario a la página de inicio
        resolve({
          status: 200,
          json: () => Promise.resolve({ authenticated: true }),
        });
      } else {
        // Lógica para manejar un inicio de sesión incorrecto
        resolve({
          status: 404,
          json: () => Promise.resolve({ authenticated: false}),
        });
        console.log('Inicio de sesión incorrecto');
      }
    }, 2000));
};
