import React, { useEffect, useState } from 'react';
import { MonitoringViewModel } from '../ViewModel/MonitoringViewModel';

const MonitoringView: React.FC = () => {
    const monitoringViewModel = new MonitoringViewModel();
    const [isMoving, setIsMoving] = useState(false);

    useEffect(() => {
        monitoringViewModel.startListening();

        const intervalId = setInterval(() => {
            const currentAcceleration = monitoringViewModel.acceleration;
            if (currentAcceleration.x > 0 || currentAcceleration.y > 0 || currentAcceleration.z > 0) {
                setIsMoving(true);
                monitoringViewModel.getMonitoringRepository().getAccelerationData().setStart();
            } else {
                setIsMoving(false);
                monitoringViewModel.getMonitoringRepository().getAccelerationData().setEnd();
            }
        }, monitoringViewModel.getMonitoringRepository().getFrecuency()); // 5000 ms = 5 seconds

        return () => {
            monitoringViewModel.stopListening();
            clearInterval(intervalId); // Clear the interval when the component unmounts
        };
    }, []);

    return (
        <div>
            {isMoving && <p>is moving</p>}
        </div>
    );
};

export default MonitoringView;