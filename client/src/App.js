import React, { Component } from 'react';
import { Provider } from  'react-redux';
import Trade from './components/trade/trade';
import Store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store = {Store}>
        <div className='App'>
          <Trade />
        </div>
      </Provider>
    );
  }
}

export default App;
