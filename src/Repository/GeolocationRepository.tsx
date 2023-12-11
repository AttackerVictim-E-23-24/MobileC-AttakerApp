// GeolocationRepository.ts
import { Geolocation } from '@capacitor/geolocation';
import { GeolocationModel } from '../Model/GeolocationModel';

export class GeolocationRepository{
    private geolocationModel: GeolocationModel;

    constructor(model: GeolocationModel){
        this.geolocationModel = model;
    }

    async setCurrentPosition(): Promise<void>{
        const coordinates = await Geolocation.getCurrentPosition();
        this.geolocationModel.setLatitude(coordinates.coords.latitude);
        this.geolocationModel.setLongitude(coordinates.coords.longitude);
        this.geolocationModel.setAccuracy(coordinates.coords.accuracy);
        this.geolocationModel.setTimestamp(new Date(coordinates.timestamp));
    }
}