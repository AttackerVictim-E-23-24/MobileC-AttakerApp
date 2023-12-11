import React, { useState, useEffect } from 'react';
import { useGeolocationViewModel } from '../ViewModel/GeolocationViewModel';

interface Props {
    // Propiedades del componente
}

const GeolocationView: React.FC = () => {
    const { latitude, longitude, accuracy } = useGeolocationViewModel();


    return (
        <div>
            <br />
            {latitude && longitude && accuracy ? 
            (
                <div>
                    <p>Latitude: { latitude }</p>
                    <p>Longitude: { longitude }</p>
                    <p>Accuracy: { accuracy }</p>
                </div>
            ) :
            (
                <div>
                    <p>
                        loading...
                    </p>
                </div>
            ) }
        </div>
    );
};

export default GeolocationView;