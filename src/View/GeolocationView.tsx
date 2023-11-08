import React, { useState, useEffect } from 'react';
import GeolocationViewModel from '../ViewModel/GeolocationViewModel';
import GeolocationRepository from '../Repository/GeolocationRepository';

interface Props {
    // Propiedades del componente
}

const GeolocationView: React.FC = () => {
    const _geolocationViewModel = new GeolocationViewModel();
    const [coordinates, setCoordinates] = useState<GeolocationRepository>();
    const [coordinatesList, setCoordinatesList] = useState<GeolocationRepository[]>([]);

    const getLocation = async () => {
        _geolocationViewModel.getCurrentPosition().then((coords) => {
            setCoordinates(coords);
        });
        if (coordinates){
            setCoordinatesList(prevList => {
                const newList = [coordinates, ...prevList];
                if (newList.length > 5) {
                    newList.pop();
                }
                return newList;
            });
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getLocation();
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <br />
            {coordinates ? 
            (
                <div>
                    <p>Latitude: { coordinates.getLatitude()}</p>
                    <p>Longitude: { coordinates.getLongitude()}</p>
                    <p>Accuracy: { coordinates.getAccuracy()}</p>
                    <p>Timestamp: { coordinates.getTimestamp().toLocaleTimeString()}</p>
                </div>
            ) :
            (
                <div>
                    <p>
                        loading...
                    </p>
                </div>
            ) }
            <div>
            {coordinatesList.map((coords, index) => (
                <div key={index}>
                    <p>
                        <span style={{ color: index === 0 ? 'red' : '' }}>
                            Latitude: {coords.getLatitude()}, 
                            Longitude: {coords.getLongitude()}, 
                            Accuracy: {coords.getAccuracy()}, 
                            Timestamp: {coords.getTimestamp().toLocaleTimeString()}
                        </span>
                    </p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default GeolocationView;