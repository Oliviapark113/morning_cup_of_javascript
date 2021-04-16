import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Challenges from './pages/challenges';
import Home from './pages/home';
import Inspiration from './pages/inspiration';
import Jokes from './pages/jokes';
import Login from './pages/login';
import Profile from './pages/profile'
import ChallengeView from "./pages/challengeView"


function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path="/challenges">
        <Challenges />
      </Route>
      <Route path="/jokes">
        <Jokes />
      </Route>
      <Route path="/inspiration">
        <Inspiration />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/challengeview">
        <ChallengeView />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    
    </Switch>
  </Router>
  );
}

export default App;
