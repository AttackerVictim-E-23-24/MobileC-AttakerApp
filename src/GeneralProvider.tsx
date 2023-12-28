
import React, { useState } from 'react';
import GeneralContext, { GeneralContextModel } from './GeneralContext';

interface GeneralProviderProps {
  children: React.ReactNode;
}

export const GeneralProvider: React.FC<GeneralProviderProps> = ({ children }) => {
  const [frecuency, setFrecuency] = useState<number>(0);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const value: GeneralContextModel = {
    frecuency,
    isConnected,
    setFrecuency,
    setIsConnected,
  };

  return <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>;
};