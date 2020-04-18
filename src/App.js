import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import PlayPage from './pages/PlayPage';
import GamesPage from './pages/GamesPage';
import FaqPage from './pages/FaqPage';
import HelpPage from './pages/HelpPage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/play" component={PlayPage} />
          <Route path="/games" component={GamesPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/help" component={HelpPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
