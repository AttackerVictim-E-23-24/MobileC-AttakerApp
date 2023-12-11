import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
  
import MonitoringView from '../View/MonitoringView';
import { MonitoringRepository } from '../Repository/MonitoringRepository';
import { useEffect } from 'react';
import { MonitoringRemote } from '../Remote/MonitoringRemote';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Attacker App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Attacker App</IonTitle>
          </IonToolbar>
        </IonHeader>

        <MonitoringView/>

      </IonContent>
    </IonPage>
  );
};

export default Home;
