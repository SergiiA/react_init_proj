import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DefaultLayout from "./components/layouts/DefaultLayout";
import Catalog from "./components/pages/Catalog/Catalog";
import Button from "./components/controls/Button/Button"
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
