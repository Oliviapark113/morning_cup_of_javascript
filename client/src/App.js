import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar';
import Challenges from './pages/challenges';
import Home from './pages/home';

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path="/challenges">
        <Challenges />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
