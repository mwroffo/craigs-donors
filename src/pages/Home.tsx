import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp, notifications, logoFacebook, logoTwitter, logoInstagram} from 'ionicons/icons';

import React from 'react';
import ReactDOM from 'react-dom';


import './Home.css';
import ExploreContainer from '../components/ExploreContainer';
import TrendingContainer from '../components/TrendingContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar class="toolbar-top">
        <IonTitle size="small" class="toolbar-title"><img alt="logo" id="header_logo" width="115" height="55" float-left src="./assets/images/CD.png"/></IonTitle>
          <IonButtons slot="secondary">
            <IonButton color="primary" expand="block" fill="clear">About Us</IonButton>
            <IonButton color="secondary" expand="block" fill="clear">Community</IonButton>
            <IonButton color="tertiary" expand="block" fill="clear">Support</IonButton>
          </IonButtons>

          <IonButtons slot="primary">
            <IonButton color="secondary" fill="outline" expand="block">
            <IonIcon slot="start" icon={personCircle} />
              Login
            </IonButton>
            <IonButton color="tertiary" fill="solid">
            <IonIcon slot="start" icon={create} />
              Register
            </IonButton>                        
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>        
        <IonGrid>
          <IonRow class="row-style">
          <IonCol class="col-style">
          <IonRow class="row-style">
            <IonButton class="btnsignup" color="warning">Continue with Amazon</IonButton>
          </IonRow>

          <IonRow class="row-style">
            <IonButton class="btnsignup" color="secondary">Continue with Twitter</IonButton>
          </IonRow>

          <IonRow class="row-style">
            <IonButton class="btnsignup" color="danger">Continue with Google</IonButton>
          </IonRow>

          <IonRow class="row-style">
            <IonButton class="btnsignup" color="primary">Continue with Facebook</IonButton>
          </IonRow>                    

          <IonRow class="row-style">
              <IonCol size="4">
                <IonButton size="small" fill="clear" class="btn-donate" color="tertiary">
                  <IonIcon slot="start" icon={logoFacebook} />
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton size="small" fill="clear" class="btn-donate" color="primary">
                  <IonIcon slot="start" icon={logoTwitter} />
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton size="small" fill="clear" class="btn-donate" color="warning">
                  <IonIcon slot="start" icon={logoInstagram} />
                </IonButton>
              </IonCol>
          </IonRow>

          </IonCol>

          {/* Sign In block */}
          <IonCol class="signup-card" size="7">
            <IonRow><h1>Sign In</h1></IonRow>
            <IonRow><IonInput type="email" placeholder="Email address" clear-input="true" required></IonInput></IonRow>
            <IonRow><IonInput type="password" placeholder="Password" clear-input="true" required></IonInput></IonRow>
            <IonRow><IonButton color="tertiary" class="btn-login">Log In</IonButton></IonRow>
            <IonRow><IonButton color="primary" fill="clear" size="small">Charity? Log in HERE</IonButton></IonRow>            
          </IonCol>
          </IonRow>

        {/* Trending Items here */}
        <TrendingContainer/>

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

export default Home;
