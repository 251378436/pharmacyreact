import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.less';
import Loader from './components/Loader/Loader';
import MenuBar from './components/MenuBar/MenuBar';
import Home from './Views/Home/Home';
import ShoppingCart from './Views/ShoppingCart/ShoppingCart';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app" className="container-fluid">
          <div id="main-content">
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/shoppingcart" component={ShoppingCart} />
          </div>
          <footer>
            <MenuBar />
          </footer>
          <Loader />
        </div>
      </Router>
    );
  }
}

export default App;
