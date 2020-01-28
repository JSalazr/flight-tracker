import React from 'react';
import LandingPage from './components/landingPage';
import './styles/styles.scss';

class App extends React.Component {
  render() {

    return (
			<div className="container">
				<LandingPage className="landingPage" />	
			</div>
    );
  }
}

export default App;
