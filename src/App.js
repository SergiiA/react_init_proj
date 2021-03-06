import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import "./App.css";

import DefaultLayout from "./components/layouts/DefaultLayout";
import Catalog from "./components/pages/Catalog/Catalog";
import Cart from "./components/pages/Cart/Cart";
import Button from "./components/controls/Button/Button";
import Input from "./components/controls/Input/Input";
import Header from "./components/widgets/Header/";
import Footer from "./components/widgets/Footer/";
import Counter from "./components/widgets/Counter/Counter";
import Product from "./components/widgets/Product/Product";
import Products from "./components/widgets/Products/Products";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Button />
          <Input />
          <Counter />
        </div>
        <div className="Prods">
          <Product name="Name" />
          <Product name="Text" />
          <Product name="Next" />
        </div>

        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Catalog} />
            <Route path="/cart" component={Footer} />
            {/* <Route path="/order" component={Order} /> */}
          </Switch>
        </BrowserRouter>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
