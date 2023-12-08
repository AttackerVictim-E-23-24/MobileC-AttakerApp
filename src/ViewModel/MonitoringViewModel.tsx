import { useEffect, useState } from 'react';
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
