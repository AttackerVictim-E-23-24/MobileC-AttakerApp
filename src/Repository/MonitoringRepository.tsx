import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
import { AccelerationData } from './AcelerationData';


let accelHandler: PluginListenerHandle;

export class MonitoringRepository{
    
    private accelData: AccelerationData;
    private frecuency: number;
    private observers: ((acceleration: { 
        x: number, 
        y: number, 
        z: number 
    }) => void)[] = [];

    addObserver(observer: (acceleration: { 
        x: number, 
        y: number, 
        z: number 
    }) => void) {
        this.observers.push(observer);
    }

    private notifyObservers(acceleration: { 
            x: number, 
            y: number, 
            z: number 
        }) {
        this.observers.forEach(observer => observer(acceleration));
    }

    startListening() {
        // Cuando los datos de aceleración cambian, notifica a los observadores
        accelHandler = Motion.addListener('accel', (event) => {
            this.accelData.setStart();
            this.accelData.setAcceleration(event.acceleration);
            this.notifyObservers(this.accelData.getAcceleration());
        });
    }

    constructor() {
        this.accelData = new AccelerationData();
        this.frecuency = 0;
        this.startListening();
    }

    stopListening() {
        if (accelHandler) {
            accelHandler.remove();
            this.accelData.setEnd();
        }
    }

    getAccelerationData() {
        return this.accelData;
    }
    

    getFrecuency() {
        return this.frecuency;
    }

    setFrecuency(frecuency: number) {
        this.frecuency = frecuency;
    }

}