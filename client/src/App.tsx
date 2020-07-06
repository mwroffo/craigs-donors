import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import DonatePage from './pages/DonatePage';
import DonateConfirmPage from './pages/DonateConfirmPage';
import TrendingPage from './pages/TrendingPage'

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
Amplify.configure(awsconfig);

const App: React.FC = () => (

  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        {/* Testing of the Home Page */}
        <Route path="/home" component={Home} exact={true} />

        <Route exact path="/" render={() => <Redirect to="/home" />} />

        {/* Testing of the Donate Page */}
        <Route path="/donatepage" component={DonatePage} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/donatepage" />} />

        {/* Testing of the Donate Confirmation Page */}
        <Route path="/donateconfirmpage" component={DonateConfirmPage} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/donateconfirmpage" />} />        

        {/* Testing of the Donate Confirmation Page */}
        <Route path="/trendingpage" component={TrendingPage} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/trendingpage" />} />        



      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;