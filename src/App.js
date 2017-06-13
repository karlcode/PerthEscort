import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import Home from './pages/HomePage'
import About from './components/About'
import Services from './components/Services'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <ul >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services and Rates</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <hr/>
          <div className="container">
            <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/services" component={Services}/>
            <Route path="/faq" component={FAQ}/>
            <Route path="/contact" component={Contact}/>
            </CSSTransitionGroup>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
