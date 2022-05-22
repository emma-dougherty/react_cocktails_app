import React from 'react'
import './App.css';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className="parallax">

      <div className="layer clouds"></div>
      <div className="layer sun"></div>
      <div className="layer wavethree"></div>
      <div className="layer wavetwo"></div>

        <div className="layer waveone">
          <div className="content-outer"></div>
              <div className="main-container">

                <MainContainer/>
              </div>
          </div>
        </div>
    
  );
}

export default App;
