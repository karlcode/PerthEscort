import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Home from '../pages/HomePage'
import About from '../pages/About'
import Services from '../pages/Services'
import FAQ from '../pages/FAQ'
import Contact from '../pages/Contact'
//import { CSSTransitionGroup } from 'react-transition-group' // ES6
import { slide as Menu } from 'react-burger-menu'
class App extends Component {
  render() {
    return (
      /*
      <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={10000}
      transitionEnter={false}
      transitionLeave={false}>*/
      <Router >
        <div>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services}/>
          <Route path="/faq" component={FAQ}/>
          <Route path="/contact" component={Contact}/>
          
          <Row className="hidden-md-down">
          <nav>
            <ul>
              <div className="nav-left">
                <li><Link to="/" className="fancy">JC</Link></li>
                <li><Link to="/">Perth's Elite Male Escort for Women</Link></li>
              </div>
              <div className="nav-right">
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/services">Services and Rates</Link></li>
                <li><Link to="/about">About</Link></li> 
                <li><Link to="/">Home</Link></li>               
              </div>
            </ul>
          </nav>
          </Row>
          <Row className="hidden-lg-up">
          <nav>
            <ul>
              <div className="nav-left">
                <li><Link to="/" className="fancy">JC</Link></li>
                <li><Link to="/">Perth's Elite Male Escort</Link></li>
              </div>
              <Col xsOffset={10} xs={1}>  
                <Menu right isOpen={ false } >
                  <Grid>
                  <Row>
                  <Link to="/">Home</Link>
                  </Row>
                  <Row>
                  <Link to="/about">About</Link>
                  </Row>
                  <Row>
                  <Link to="/services">Services and Rates</Link>
                  </Row>
                  <Row>
                  <Link to="/faq">FAQ</Link>
                  </Row>
                  <Row>
                  <Link to="/contact">Contact</Link>
                  </Row>
                  </Grid>
                </Menu>      
              </Col>
            </ul>
          </nav>
          </Row>
        </div>
      </Router>
      //</CSSTransitionGroup>
    );
  }
}

export default App;