import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.less';
import Loader from './components/Loader/Loader';
import MenuBar from './components/MenuBar/MenuBar';
import Home from './Views/Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app" class="container-fluid">
          <div id="main-content">
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
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
