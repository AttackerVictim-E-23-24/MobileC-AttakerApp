// MonitoringModel.ts
export class MonitoringModel {
    private frecuency: number;
    private inactivityTime: number;
    private offlineTime: number;
    private minDistance: number;

    constructor() {
        this.frecuency = 30;
        this.inactivityTime = 90;
        this.offlineTime = 90;
        this.minDistance = 100;

    }

    getFrecuency(): number {
        return this.frecuency;
    }

    setFrecuency(frecuency: number): void {
        this.frecuency = frecuency;
    }

    getInactivityTime(): number {
        return this.inactivityTime;
    }

    setInactivityTime(inactivityTime: number): void {
        this.inactivityTime = inactivityTime;
    }

    getOfflineTime(): number {
        return this.offlineTime;
    }

    setOfflineTime(offlineTime: number): void {
        this.offlineTime = offlineTime;
    }

    getMinDistance(): number {
        return this.minDistance;
    }

    setMinDistance(minDistance: number): void {
        this.minDistance = minDistance;
    }

}// MonitoringModel.ts
import { MotionModel } from './MotionModel';
import { GeolocationModel } from './GeolocationModel';

export class MonitoringModel {
    private frecuency: number;
    private inactivityTime: number;
    private offlineTime: number;
    private minDistance: number;
    private motionModel: MotionModel;
    private geolocationModel: GeolocationModel;

    constructor() {
        this.motionModel = new MotionModel();
        this.geolocationModel = new GeolocationModel();
        this.frecuency = 30;
        this.inactivityTime = 90;
        this.offlineTime = 90;
        this.minDistance = 100;

    }

    getMotionModel() {
        return this.motionModel;
    }

    setMotionModel(motionModel: MotionModel): void {
        this.motionModel = motionModel;
    }



    getFrecuency(): number {
        return this.frecuency;
    }

    setFrecuency(frecuency: number): void {
        this.frecuency = frecuency;
    }

    getInactivityTime(): number {
        return this.inactivityTime;
    }

    setInactivityTime(inactivityTime: number): void {
        this.inactivityTime = inactivityTime;
    }

    getOfflineTime(): number {
        return this.offlineTime;
    }

    setOfflineTime(offlineTime: number): void {
        this.offlineTime = offlineTime;
    }

    getMinDistance(): number {
        return this.minDistance;
    }

    setMinDistance(minDistance: number): void {
        this.minDistance = minDistance;
    }

    getAcceleration(): MotionModel {
        return this.motionModel;
    }

    setAcceleration(motionModel: MotionModel): void {
        this.motionModel = motionModel;
    }

    getGeolocation(): GeolocationModel {
        return this.geolocationModel;
    }

    setGeolocation(geolocationModel: GeolocationModel): void {
        this.geolocationModel = geolocationModel;
    }

}