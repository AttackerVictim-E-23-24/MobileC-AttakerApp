import { useEffect, useState } from 'react';
import { GeolocationRepository } from '../Repository/GeolocationRepository';
import { GeolocationModel } from '../Model/GeolocationModel';

export function useGeolocationViewModel() {
    const geolocationModel = new GeolocationModel();
    const geolocationRepository = new GeolocationRepository(geolocationModel);
    const [latitude, setLatitude] = useState(geolocationModel.getLatitude());
    const [longitude, setLongitude] = useState(geolocationModel.getLongitude());
    const [accuracy, setAccuracy] = useState(geolocationModel.getAccuracy());

    useEffect(() => {
        const fetchPosition = async () => {
            await geolocationRepository.setCurrentPosition();
            setLatitude(geolocationModel.getLatitude());
            setLongitude(geolocationModel.getLongitude());
            setAccuracy(geolocationModel.getAccuracy());
        };

        fetchPosition();
    }, [geolocationRepository, geolocationModel]);

    return { latitude, longitude, accuracy };
}