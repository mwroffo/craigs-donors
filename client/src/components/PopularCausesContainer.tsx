import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg, IonListHeader } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp} from 'ionicons/icons';

import ReactDOM from 'react-dom';


import './PopularCausesContainer.css';

interface ContainerProps { }

const PopularCausesContainer: React.FC<ContainerProps> = () => {
  return (
    <IonGrid class="display-grid">
        <IonRow><h1>Popular Causes</h1></IonRow>

        <IonRow class="row-style">
            <IonCol class="col-style">
            <IonButton class="btn-popular-causes" expand="full" fill="solid">
            <IonIcon slot="start" icon={languageSharp} />
              Education
            </IonButton>
            </IonCol>
            <IonCol class="col-style">
            <IonButton class="btn-popular-causes" expand="full" fill="solid">
            <IonIcon slot="start" icon={heartHalf} />
              Mental Health
            </IonButton>
            </IonCol>
            <IonCol class="col-style">
            <IonButton class="btn-popular-causes" expand="full" fill="solid">
            <IonIcon slot="start" icon={medkit} />
              Health
            </IonButton>
            </IonCol>              
            <IonCol class="col-style">
            <IonButton class="btn-popular-causes" expand="full" fill="solid">
            <IonIcon slot="start" icon={colorFill} />
              Clean Water
            </IonButton>
            </IonCol>            
        </IonRow>
    </IonGrid>    

  );
};

export default PopularCausesContainer;
