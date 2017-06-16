import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import joshRunwaySuit from './images/josh-runway-suit.JPG';
import joshBed from './images/josh-bed.jpg';

export default class Home extends Component {
render() {
  return (
    <div id="home-page">
      <section id="home-landing">
        <div id="home-title">
          <h1>Josh Chase</h1>
          <h3>Perth's ELITE female companion</h3>
        </div>
        <i id="home-down" className="fa fa-angle-double-down" aria-hidden="true"></i>
      </section>

      <section id="home-welcome" className="light-section">
        <div className="container">
          <h2 className="center">Welcome my dear,</h2>
          <p>Thank you for making your way to my site. Our society has evolved into a more egalitarian and less judgemental one, where women are afforded opportunities to explore dimensions that heretofore had been generally open only to men. It's become far more acceptable for a woman to wish to spend time with a quality gentleman, without the complications of commitment, or a relationship.</p>
          <p>My name is Josh Chase, and I am a professional companion. I am here to cater to all your desires.
          Please, take a look around and get to know me better. If you feel we would be compatible, I would be delighted to hear from you.</p>
          <h3 id="home-signature" className="fancy">JC</h3>
        </div>
      </section>

      <section id="home-split-images">
        <Grid fluid>
          <Row>
            <Col xs={6} md={6} id="home-split-images-left">
              <div id="home-split-images-left-tri">
              </div>
              <img src={joshRunwaySuit} alt="Josh Chase modeling a suit on the runway"/>
            </Col>
            <Col xs={6} md={6} id="home-split-images-right">
              <div id="home-split-images-right-tri">
              </div>
              <img src={joshBed} alt="Josh Chase laying spread out shirtless on a bed"/>
            </Col>
          </Row>
        </Grid>
      </section>

    </div>
    );
  }
}
