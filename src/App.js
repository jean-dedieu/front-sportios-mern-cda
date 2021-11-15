import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Academies from './academy/pages/Academies';
import NewPlayer from './players/pages/NewPlayer';
import AcademyPlayers from './players/pages/AcademyPlayer';
import UpdatePlayer from './players/pages/UpdatePlayer';
import Auth from './academy/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

const App = () => {
  const { token, login, logout, academyId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Academies />
        </Route>
        <Route path="/:academyId/players" exact>
          <AcademyPlayers />
        </Route>
        <Route path="/players/new" exact>
          <NewPlayer />
        </Route>
        <Route path="/players/:playerId">
          <UpdatePlayer />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Academies />
        </Route>
        <Route path="/:academyId/players" exact>
          <AcademyPlayers />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        academyId: academyId,
        login: login,
        logout: logout
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
