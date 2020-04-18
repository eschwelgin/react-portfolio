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
          <Route exact path="/react-portfolio/">
            <Home />
          </Route> 
          <Route  path="/react-portfolio/portfolio">
            <Portfolio />
          </Route>
          <Route  path="/react-portfolio/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
