import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from '../pages/HomePage'
import About from '../pages/About'
import Services from '../pages/Services'
import FAQ from '../pages/FAQ'
import Contact from '../pages/Contact'

import './Navbar.css';

class App extends Component {
  render() {
    return (
      <Router >
        <div>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services}/>
          <Route path="/faq" component={FAQ}/>
          <Route path="/contact" component={Contact}/>

          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services and Rates</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          
        </div>
      </Router>
    );
  }
}

export default App;