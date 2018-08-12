import React, { Component } from 'react';
import './App.css';
import { Button } from './components/atoms/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>Default</Button>
        <Button primary>Primary</Button>
      </div>
    );
  }
}

export default App;
