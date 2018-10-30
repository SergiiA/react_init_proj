import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";

import logo from "./logo.svg";
import "./App.css";
import store from "./store";

import DefaultLayout from "./components/layouts/DefaultLayout";
import Catalog from "./components/pages/Catalog/Catalog";
import Button from "./components/controls/Button/Button";
import Input from "./components/controls/Input/Input";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button />
          <Input />
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={Catalog} />
                {/* <Route path="/cart" component={Cart} />*/}
                {/* under construction <Route path="/order" component={Order} /> */}
              </Switch>
            </BrowserRouter>
          </Provider>
        </header>
      </div>
    );
  }
}

export default App;
