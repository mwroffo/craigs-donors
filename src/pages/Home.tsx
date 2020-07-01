import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp} from 'ionicons/icons';

import React from 'react';
import ReactDOM from 'react-dom';


import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="toolbar-top">
        <IonTitle size="small" class="toolbar-title"><img alt="logo" id="header_logo" width="115" height="55" float-left src="./assets/images/CD.png"/></IonTitle>
          {/* <IonTitle><img alt="logo" id="header_logo" height="40" float-left src="../assets/images/CD.png"/>Craig's Donors</IonTitle> */}
          {/* <IonTitle><IonImg alt="Craigs Logo" src="../assests/images/CDN.png" />Craigs Donors</IonTitle> */}
          <IonButtons slot="secondary">
            <IonButton color="primary" expand="block" fill="clear">About Us</IonButton>
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
        <IonRow>
          <IonCol>
            <IonList lines="none" class="btn-container">
              <IonItem>
                <IonButton class="btnsignup" color="warning">Continue with Amazon</IonButton>
              </IonItem>

              <IonItem>
                <IonButton class="btnsignup" color="secondary">Continue with Twitter</IonButton>
              </IonItem>

              <IonItem>
                <IonButton class="btnsignup" color="danger">Continue with Google</IonButton>            
              </IonItem>

              <IonItem>
                <IonButton class="btnsignup" color="success">Continue with Facebook</IonButton>
              </IonItem>                              
            </IonList>
          </IonCol>

          <IonCol>
            <IonCard class="signup-card">
            <h1>Sign In</h1>
              <IonCardContent>                  
                <IonCardContent>
                  <IonList lines="none">
                    <IonItem>                      
                      <IonInput type="email" placeholder="Email address"></IonInput>                        
                    </IonItem>
                    <IonItem>                        
                      <IonInput type="password" placeholder="Password"></IonInput>                        
                    </IonItem>
                    <IonItem>
                      <IonButton color="success" class="btn-login">Log In</IonButton>
                    </IonItem>                      
                    {/* <IonItem>
                      Charity?<IonButton color="success">Log in here</IonButton>
                    </IonItem>                     */}
                  </IonList>
                </IonCardContent>
              </IonCardContent>              
            </IonCard>
            <IonItem class="btn-charity-login">
                {/* Charity?<IonButton color="clear">Log in here</IonButton> */}
                <IonText color="dark">Charity?</IonText><IonButton class="btn-charity" size="small" color="clear">Log in here</IonButton>
            </IonItem>            
          </IonCol>
        </IonRow>
                
        <IonList class="list-trending">
          <h1>Trending</h1>
          <IonItem class="list-trending-item">
            <IonRow>
              <h2>How can we do most good with limited resources?</h2>              
            </IonRow>                    
            <IonRow>
              <h3>#EffeciveAltruism</h3>              
            </IonRow>
          </IonItem>
          <IonItem class="list-trending-item">
          <IonRow>
              <h2>Join me to fight COVID-19 in thirdworld!!!</h2>              
            </IonRow>                    
            <IonRow>
              <h3>#COVID-19</h3>              
            </IonRow>
          </IonItem>
          <IonItem class="list-trending-item">
          <IonRow>
              <h2>How can we do most good with limited resources?</h2>              
            </IonRow>                    
            <IonRow>
              <h3>#EffeciveAltruism</h3>              
            </IonRow>
          </IonItem>
        </IonList>

        <IonGrid>
        <IonRow class="row-style">
            <IonCol class="col-style"><div>Popular Causes</div></IonCol>
        </IonRow>       
        
        <IonRow class="row-style">
            <IonCol class="col-style">
            <IonButton class="btn-popular-causes" size = "large" expand="full" fill="solid">
            <IonIcon slot="start" icon={languageSharp} />
              Education
            </IonButton>
            </IonCol>
            <IonCol class="col-style">
            <IonButton class="btn-popular-causes" size = "large" expand="full" fill="solid">
            <IonIcon slot="start" icon={heartHalf} />
              Mental Health
            </IonButton>
            </IonCol>
            <IonCol class="col-style">
            <IonButton class="btn-popular-causes" size = "large" expand="full" fill="solid">
            <IonIcon slot="start" icon={medkit} />
              Health
            </IonButton>
            </IonCol>              
            <IonCol class="col-style">
            <IonButton class="btn-popular-causes" size = "large" expand="full" fill="solid">
            <IonIcon slot="start" icon={colorFill} />
              Clean Water
            </IonButton>
            </IonCol>            
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

export default Home;
