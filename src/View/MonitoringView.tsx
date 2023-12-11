import React, { useEffect, useState } from 'react';
import { useMonitoringViewModel } from '../ViewModel/MonitoringViewModel';
import {
    IonPage,
    IonContent,
    IonInput,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonLabel,
    IonItem,
  } from '@ionic/react';
const MonitoringView: React.FC = () => {
    const { latitude, longitude, isMoving, timeStamp } = useMonitoringViewModel();


    return (
        <div>
            <IonCard>
            <IonCardHeader>
                <IonCardTitle>Título de la Tarjeta</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                {latitude && longitude ? 
                (
                    <div>
                        <p>Latitude: { latitude.toPrecision(7) }</p>
                        <p>Longitude: { longitude.toPrecision(7) }</p>
                        <p>Timestamp: { timeStamp.getHours() + ":" + timeStamp.getMinutes().toLocaleString() }</p>
                        <p>Moving: { isMoving ? 'is moving' : 'is not moving ' }</p>
                    </div>
                ) :
                (
                    <div>
                        <p>
                            loading...
                        </p>
                    </div>
                ) }
            </IonCardContent>
            </IonCard>
        </div>
    );
};

export default MonitoringView;