import React, { useContext, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { PrivateRoute } from './common/components/private-route';

import { AuthContext } from './common/contexts/auth-context';

import { SignupLogin } from './pages/signup-login';
import { LandingPage } from './pages/landing-page';

function App() {

  const { authenticated } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(authenticated)

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn}}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/" exact component={LandingPage} />
          <Route path="/login" exact component={SignupLogin} />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;