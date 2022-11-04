import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './AppFooter';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <h1>Hello, World!</h1>
        </div>
        <AppFooter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
