// MonitoringViewModel.ts
import { useEffect, useState } from 'react';
import { MonitoringRepository } from '../Repository/MonitoringRepository';
import { MonitoringModel } from '../Model/MonitoringModel';
import { GeolocationModel } from '../Model/GeolocationModel';
import { MotionModel } from '../Model/MotionModel';
import { UserModel } from '../Model/UserModel';

export function useMonitoringViewModel() {
    const monitoringModel = new MonitoringModel();
    const geolocationModel = new GeolocationModel();
    const motionModel = new MotionModel();
    const userModel = UserModel.getInstance();
    const monitoringRepository = new MonitoringRepository();
    const [offlineTime, setOfflineTime] = useState(monitoringModel.getOfflineTime());
    const [latitude, setLatitude] = useState(geolocationModel.getLatitude());
    const [longitude, setLongitude] = useState(geolocationModel.getLongitude());
    const [isMoving, setIsMoving] = useState(motionModel.isMoving());
    const [timeStamp, setTimestamp] = useState(geolocationModel.getTimestamp());
    const [dataLoaded, setDataLoaded] = useState(false);
    
    useEffect(() => {
        const fetchPosition = async () => {
            await monitoringRepository.getGeolocationRepository().setCurrentPosition();
            setLatitude(monitoringRepository.getGeolocationModel().getLatitude());
            setLongitude(monitoringRepository.getGeolocationModel().getLongitude());
            setTimestamp(monitoringRepository.getGeolocationModel().getTimestamp());
            setIsMoving(monitoringRepository.getMonitoringModel().getMotionModel().isMoving());
        };

        fetchPosition();
    }, [monitoringRepository, geolocationModel, motionModel]);

    
    useEffect(() => {
        const fetchMonitoringData = async () => {
            if (!dataLoaded) {
                await monitoringRepository.initializeData(userModel.getUsername());
                setDataLoaded(true);
            }
        };
        fetchMonitoringData();
    }, []);


    return { latitude, longitude, isMoving , timeStamp, offlineTime};
}