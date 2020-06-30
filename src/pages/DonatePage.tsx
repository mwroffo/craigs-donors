import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp} from 'ionicons/icons';

import React from 'react';
import ReactDOM from 'react-dom';


import './DonatePage.css';

const DonatePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="toolbar-top">
          {/* <IonTitle class="toolbar-title">Craig's Donors - Donate Page</IonTitle>           */}
          <IonTitle class="toolbar-title"><img alt="logo" id="header_logo" width="120" height="65" float-left src="./assets/images/CD.png"/></IonTitle>

          <IonButtons slot="secondary">
            <IonButton color="primary" expand="block" fill="clear">Donate</IonButton>
            <IonButton color="secondary" expand="block" fill="clear">Community</IonButton>
            <IonButton color="tertiary" expand="block" fill="clear">Support</IonButton>
          </IonButtons>

          <IonButtons slot="primary">
            <IonButton fill="solid">
            <IonIcon slot="start" icon={personCircle} />
              Login
            </IonButton>
            <IonButton fill="solid">
            <IonIcon slot="start" icon={create} />
              Register
            </IonButton>                        
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>                                
        <IonList class="list-trending">          
          <IonItem>
            <IonRow class="header-text">Donate to Homeless Entrepreneur</IonRow>
          </IonItem>
          <IonGrid class="display-grid">
            <IonRow className="ion-align-items-center">
              <IonCol className="ion-align-self-center">
                <IonImg class="img-charity" src="./assets/images/homeless_entrepreneur.png" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="col-style"><div>$5</div></IonCol>
              <IonCol class="col-style"><div>$10</div></IonCol>
              <IonCol class="col-style"><div>$20</div></IonCol>              
            </IonRow>
            <IonRow>
              <IonCol class="col-style"><div>$50</div></IonCol>
              <IonCol class="col-style"><div>$100</div></IonCol>
              <IonCol class="col-style"><div>$200</div></IonCol>              
            </IonRow>            
          </IonGrid>

          <IonGrid>
            <IonCol size="6">ion-col size-"6"</IonCol>
            <IonCol>ion-col</IonCol>
            <IonCol>ion-col</IonCol>
          </IonGrid>

        </IonList>
      </IonContent>
      
      <IonFooter>
        <IonToolbar class="page-footer">      
          <IonRow class="page-footer">
            <IonCol>
              <IonButton color="light" expand="block" fill="clear">Privacy</IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="light" expand="block" fill="clear">Sitemap</IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="light" expand="block" fill="clear">Terms</IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="light" expand="block" fill="clear">Help</IonButton>
            </IonCol>                              
          </IonRow>

        </IonToolbar>
      </IonFooter>

    </IonPage>
  );
};

export default DonatePage;