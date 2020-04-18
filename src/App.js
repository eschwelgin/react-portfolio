import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home.js'
import Portfolio from './components/Portfolio.js'
import Contact from './components/Contact.js'


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route> 
          <Route  path="/portfolio">
            <Portfolio />
          </Route>
          <Route  path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
