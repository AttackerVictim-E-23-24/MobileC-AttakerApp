import React from 'react';

export interface GeneralContextModel {
  frecuency: number;
  isConnected: boolean;
  setFrecuency: (frecuency: number) => void;
  setIsConnected: (isConnected: boolean) => void;
}

const GeneralContext = React.createContext<GeneralContextModel | undefined>(undefined);

export default GeneralContext;
