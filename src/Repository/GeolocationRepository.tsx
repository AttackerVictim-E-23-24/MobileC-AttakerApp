import { Geolocation } from '@capacitor/geolocation';

class GeolocationRepository{
    private latitude: number;
    private longitude: number;
    private accuracy: number;
    private timestamp: Date;

    constructor(){
        this.latitude = 0;
        this.longitude = 0;
        this.accuracy = 0;
        this.timestamp = new Date();
    }

    async setCurrentPosition(): Promise<void>{
        const coordinates = await Geolocation.getCurrentPosition();
        this.latitude = coordinates.coords.latitude;
        this.longitude = coordinates.coords.longitude;
        this.accuracy = coordinates.coords.accuracy;
        this.timestamp = new Date(coordinates.timestamp);
    }

    getLatitude(){
        return this.latitude;
    }
    getLongitude(){
        return this.longitude;
    }
    getAccuracy(){
        return this.accuracy;
    }
    getTimestamp(){
        return this.timestamp;
    }

}

export default GeolocationRepository;