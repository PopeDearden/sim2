import React, { Component } from 'react';
import routes from './routes';
import Header from './Components/Header/Header'
import { HashRouter, Link} from "react-router-dom";
import './App.css';

import axios from 'axios'

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Header />
        {routes}
      </div>
      </HashRouter>
    )
  }
}

export default App;
