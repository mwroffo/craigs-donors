import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { withFederated } from 'aws-amplify-react';




const Home: React.FC = () => {
  return (
    <div>
    <IonPage>
    <AmplifySignOut />
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  </div>
  );
};

export default withAuthenticator(Home);
