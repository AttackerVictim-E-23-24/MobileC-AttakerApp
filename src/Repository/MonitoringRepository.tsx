import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
import { Geolocation } from '@capacitor/geolocation';
import { MonitoringModel } from '../Model/MonitoringModel';
import { MotionModel } from '../Model/MotionModel';
import { GeolocationModel } from '../Model/GeolocationModel';
import { GeolocationRepository } from './GeolocationRepository';


let accelHandler: PluginListenerHandle;

export class MonitoringRepository{
    
    private monitoringModel: MonitoringModel;
    private motionModel: MotionModel;
    private geolocationModel: GeolocationModel;
    private geolocationRepository: GeolocationRepository;


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
            this.monitoringModel.getAcceleration().setTimestamp();
            this.monitoringModel.getAcceleration().setAcceleration(event.acceleration);
            this.notifyObservers(this.monitoringModel.getAcceleration().getAcceleration());
        });
    }

    constructor() {
        this.monitoringModel = new MonitoringModel();
        this.motionModel = new MotionModel();
        this.geolocationModel = new GeolocationModel();
        this.geolocationRepository = new GeolocationRepository(this.geolocationModel);
        this.startListening();
    }

    stopListening() {
        if (accelHandler) {
            accelHandler.remove();
        }
    }

    getMonitoringModel(): MonitoringModel {
        return this.monitoringModel;
    }

    getMotionModel(): MotionModel {
        return this.motionModel;
    }

    getGeolocationModel(): GeolocationModel {
        return this.geolocationModel;
    }

    getGeolocationRepository(): GeolocationRepository {
        return this.geolocationRepository;
    }


}