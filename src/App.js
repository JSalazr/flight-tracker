import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LandingPage from './components/landingPage';
import ResultPage from './components/resultPage';
import './styles/styles.scss';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path='/:flight' children={
            <ResultPage className="landingPage" />	
          } />
          <Route path='/' children={
            <LandingPage className="landingPage" />	
          } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
