import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import joshBed from './images/josh-bed.jpg';

export default class Home extends Component {
render() {
  return (
    <div id="home-page">
      <section id="home-landing">
        <div id="home-title">
          <h1 className="sourcesans">Josh Chase</h1>
          <h3 className="sourcesans">Perth's ELITE female companion</h3>
        </div>
        <i id="home-down" className="fa fa-angle-double-down" aria-hidden="true"></i>
      </section>

      <section className="panel container">
        <h1 className="center">Welcome my lovely,</h1>
        <h2>Thank you for making your way to my site. As our society has evolved into a more egalitarian and a less judgemental one women have been afforded opportunities to explore dimensions that heretofore had been generally open only to men. It has become far more acceptable for a woman to wish to spend time with a quality gentleman without the complications of a commitment or a relationship. If you are such a woman then I encourage you to peruse this site.</h2>
        <h2>My name is Josh Chase, and I am a professional companion. I am the perfect solution to your dilemma.</h2><h2>Welcome to my website - please have a look around and get to know me better, and if you feel we would be compatible, I would be delighted to hear from you.</h2>
      </section>

            <Grid fluid>
        <Row>
            <Col xs={12}>
            <Row center="xs" around="xs">
            
                <h1 className="fancy">JC</h1>

            </Row>
        
            </Col>
        </Row>
        </Grid> 

      <section id="home-welcome">
        <Grid fluid>
        <Row>
          <Col xs={6} md={6} id="home-welcome-left">
            <h1>Hello, world!</h1>
          </Col>
          <Col xs={6} md={6} id="home-welcome-right">
            <div id="home-welcome-right-tri">
            </div>

            <img src={joshBed} />
          </Col>
        </Row>
      </Grid>
        
      </section>



    </div>
    );
  }
}
