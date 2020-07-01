import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp, notifications } from 'ionicons/icons';

import React from 'react';
import ReactDOM from 'react-dom';


import './DonatePage.css';

const DonatePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="toolbar-top">
          <IonTitle size="small" class="toolbar-title"><img alt="logo" id="header_logo" width="115" height="55" float-left src="./assets/images/CD.png"/></IonTitle>

          <IonButtons slot="secondary">
            <IonButton color="primary" expand="block" fill="clear">Donate</IonButton>
            <IonButton color="secondary" expand="block" fill="clear">Community</IonButton>
            <IonButton color="tertiary" expand="block" fill="clear">Support</IonButton>
          </IonButtons>

          <IonButtons slot="primary">
            <IonButton fill="clear">
            <IonIcon slot="start" icon={notifications} />
            </IonButton>
            <IonButton size="large" fill="solid" color="tertiary">
              James Cook
            </IonButton>                        
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>                                
          <IonGrid class="display-grid">
            <IonRow class="row-style">
              <IonCol class="col-style"><div>Donate to Homeless Entrepreneur</div></IonCol>
            </IonRow>
            <IonRow class="row-style">
              <IonCol></IonCol>
              <IonImg class="img-charity" src="./assets/images/homeless_entrepreneur.png" />
              <IonCol></IonCol>              
            </IonRow>
            <IonRow class="row-style">
              <IonCol class="col-style"><IonButton size="large" class="btn-donate" color="warning">$5</IonButton></IonCol>
              <IonCol class="col-style"><IonButton size="large" class="btn-donate" color="warning">$10</IonButton></IonCol>
              <IonCol class="col-style"><IonButton size="large" class="btn-donate" color="warning">$20</IonButton></IonCol>              
            </IonRow>
            <IonRow class="row-style">
            <IonCol class="col-style"><IonButton size="large" class="btn-donate" color="warning">$50</IonButton></IonCol>
              <IonCol class="col-style"><IonButton size="large" class="btn-donate" color="warning">$100</IonButton></IonCol>
              <IonCol class="col-style"><IonButton size="large" class="btn-donate" color="warning">$200</IonButton></IonCol>              
            </IonRow>            
            <IonRow class="row-style">
              {/* <IonCol class="col-style"><div></div></IonCol> */}
              <IonCol class="col-style" size="4" offset="4" ><IonButton size="large" color="warning">Pay with Amazon Pay</IonButton></IonCol>
              {/* <IonCol class="col-style"><div></div></IonCol>               */}
            </IonRow>                        
          </IonGrid>

      </IonContent>
      
      <IonFooter>
        <IonToolbar class="page-footer">      
          <IonRow>
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