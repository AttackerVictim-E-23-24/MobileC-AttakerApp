import { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';
import { MonitoringRepository } from '../Repository/MonitoringRepository';

export class MonitoringViewModel {
    private monitoringRepository: MonitoringRepository = new MonitoringRepository();
    private subscriber: ((acceleration: { x: number, y: number, z: number }) => void) | null = null;

    constructor() {
        this.monitoringRepository.addObserver((acceleration: { x: number, y: number, z: number }) => {
            this.notifySubscriber();
        });
    }
    

    get acceleration() {
        return this.monitoringRepository.getAccelerationData().getAcceleration();
    }

    getFrecuency() {
        return this.monitoringRepository.getFrecuency();
    }

    getMonitoringRepository() {
        return this.monitoringRepository;
    }
    
    subscribe(callback: (acceleration: { x: number, y: number, z: number }) => void) {
        this.subscriber = callback;
        this.notifySubscriber(); // Notificar inmediatamente al suscriptor con los datos actuales

        // Devolver una función de desuscripción
        return () => {
            this.subscriber = null;
        };
    }

    startListening() {
        this.monitoringRepository.startListening();
    }

    stopListening() {
        this.monitoringRepository.stopListening();
    }
    
    private notifySubscriber() {
        if (this.subscriber) {
            this.subscriber(this.acceleration);
        }
    }

}

import { LoginModel } from '../Model/LoginModel'; // Assuming LoginModel is a singleton

const useMonitoringViewModel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [frecuency, setFrecuency] = useState(0);

  const monitoringRepository = new MonitoringRepository();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const username = LoginModel.getInstance().getUsername();
        await monitoringRepository.fetchMonitoringData(username);
        setFrecuency(monitoringRepository.getFrecuency());
        setIsSuccessful(true);
      } catch (error) {
        setIsSuccessful(false);
      }
      setIsLoading(false);
    };

    fetchData();

    const intervalId = setInterval(fetchData, 3 * 60 * 60 * 1000); // Fetch data every 3 hours

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return { isLoading, isSuccessful, frecuency };
};

export default useMonitoringViewModel;