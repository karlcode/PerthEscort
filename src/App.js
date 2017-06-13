import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <Router >
        <div >
          <nav>
          <ul className="navigation">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services and Rates</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            
          </ul>
          </nav>
          
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/services" component={Services}/>
            <Route path="/faq" component={FAQ}/>
            <Route path="/contact" component={Contact}/>
            
       </div>
      </Router>
    );
  }
}

export default App;
