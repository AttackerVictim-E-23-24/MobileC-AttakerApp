import GeolocationRepository from '../Repository/GeolocationRepository';

class GeolocationViewModel{
    private _geolocationRepository: GeolocationRepository

    constructor(){
        this._geolocationRepository= new GeolocationRepository();
    }

    async getCurrentPosition(): Promise<GeolocationRepository>{
        await this._geolocationRepository.setCurrentPosition();
        return this._geolocationRepository;
    }

    getLatitude(){
        return this._geolocationRepository.getLatitude();
    }
    getLongitude(){
        return this._geolocationRepository.getLongitude();
    }
    getAccuracy(){
        return this._geolocationRepository.getAccuracy();
    }
    getTimestamp(){
        return this._geolocationRepository.getTimestamp();
    }

}

export default GeolocationViewModel;