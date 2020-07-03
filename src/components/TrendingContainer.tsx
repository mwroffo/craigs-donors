import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg, IonListHeader } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp} from 'ionicons/icons';

import ReactDOM from 'react-dom';


import './TrendingContainer.css';

interface ContainerProps { }

const TrendingContainer: React.FC<ContainerProps> = () => {
  return (
    <IonGrid class="display-grid">
    <IonRow class="row-style">
        <IonCol class="col-style"><IonText color="warning">What's</IonText> <IonText color="tertiary">Trending</IonText></IonCol>
    </IonRow>
    
    <IonRow className="ion-justify-content-center">
        <IonList>
          <IonItem class="list-trending-item">
            <IonGrid>
            <IonRow>
              <h1>How can we do most good with limited resources?</h1>
            </IonRow>                                
            <IonRow>
              <IonCol size="4">#EffectiveAltruism</IonCol>
              <IonCol size="4">57 Replies</IonCol>
              <IonCol size="4">
                <IonButton color="tertiary" size="small">Join Discussion</IonButton>
              </IonCol>                        
            </IonRow>
            </IonGrid>            
          </IonItem>

          <IonItem class="list-trending-item">
            <IonGrid>
            <IonRow>
              <h1>Join me to fight COVID-19 in third world!!!</h1>
            </IonRow>                                
            <IonRow>
              <IonCol size="4">#COVID-19</IonCol>
              <IonCol size="4">76 Replies</IonCol>
              <IonCol size="4">
                <IonButton color="tertiary" size="small">Join Discussion</IonButton>
              </IonCol>                        
            </IonRow>
            </IonGrid>            
          </IonItem>

          <IonItem class="list-trending-item">
            <IonGrid>
            <IonRow>
              <h1>New Renewable Energy Project starting...Join Us!</h1>
            </IonRow>                                
            <IonRow>
              <IonCol size="4">#SAVEOURPLANET</IonCol>
              <IonCol size="4">97 Replies</IonCol>
              <IonCol size="4">
                <IonButton color="tertiary" size="small">Join Discussion</IonButton>
              </IonCol>                        
            </IonRow>
            </IonGrid>            
          </IonItem>          

          {/* <IonItem class="list-trending-item">
            <IonRow>
              <h1>Join me to fight COVID-19 in third world!!! <br/>#COVID-19</h1>            
            </IonRow>                                
            <IonRow><IonButton color="tertiary" class="btn-login">Join Discussion</IonButton></IonRow>            
          </IonItem>

          <IonItem class="list-trending-item">
            <IonRow>
              <h1>How can we do most good with limited resources? <br/>#EffectiveAltruism</h1>
            </IonRow>                                
            <IonRow><IonButton color="tertiary" class="btn-login">Join Discussion</IonButton></IonRow>            
          </IonItem> */}

        </IonList>
    </IonRow>
    </IonGrid>    

  );
};

export default TrendingContainer;
