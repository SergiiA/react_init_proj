import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";

import "./App.css";
import store from "./store";

import DefaultLayout from "./components/layouts/DefaultLayout";
import Catalog from "./components/pages/Catalog/Catalog";
import Button from "./components/controls/Button/Button";
import Input from "./components/controls/Input/Input";
import Header from "./components/widgets/Header/";
import Footer from "./components/widgets/Footer/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Button />
          <Input />
        </div>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Catalog} />
              {/* <Route path="/cart" component={Cart} />*/}
              {/* under construction <Route path="/order" component={Order} /> */}
            </Switch>
          </BrowserRouter>
        </Provider>
        <Header />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
