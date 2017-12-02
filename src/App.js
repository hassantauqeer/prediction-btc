import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import CountdownTimer from './CountdownTimer';
import '../node_modules/animate.css/animate.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
              <CountdownTimer endDate={moment('01/08/2018', 'DD/MM/YYYY')}/>
          </div>
          <div>
              <img className="animated flipBtc" src={require("./images/btc-1.png")}/>
          </div>
          <div className="notes">
              <p>
                  Based on McAfee's Prediction.
              </p>
              <p>
                  1 BTC = $25,000
              </p>
              <p>
                  Current Price = $12,000
              </p>
          </div>
      </div>
    );
  }
}

export default App;
