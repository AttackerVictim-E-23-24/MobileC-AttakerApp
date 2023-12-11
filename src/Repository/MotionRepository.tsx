import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
import { MotionModel } from '../Model/MotionModel';
import { MonitoringModel } from '../Model/MonitoringModel';

let accelHandler: PluginListenerHandle;

export class MotionRepository {
    private monitoringModel: MonitoringModel;

    private observers: ((acceleration: { 
        x: number, 
        y: number, 
        z: number 
    }) => void)[] = [];

    constructor() {
        this.monitoringModel = new MonitoringModel() ;
    }

    startListening() {
        // Cuando los datos de aceleración cambian, actualiza el modelo
        accelHandler = Motion.addListener('accel', (event) => {
            this.monitoringModel.getMotionModel().setTimestamp();
            this.monitoringModel.getMotionModel().setAcceleration(event.acceleration);
        });
    }

    stopListening() {
        if (accelHandler) {
            accelHandler.remove();
        }
    }

    getMonitoringModel() {
        return this.monitoringModel;
    }
}