import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../View/ExploreContainer';
import './Home.css';
import GeolocationView from '../View/GeolocationView';
  
import MonitoringView from '../View/MonitoringView';

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
