import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import joshRunwaySuit from './images/josh-runway-suit.jpg';
import joshBed from './images/josh-bed.jpg';
import Slider from 'react-slick';


export default class Home extends Component {
render() {
  var sliderSettings = {
      arrows: false,
      autoplay: true,
      dots: false,
      adaptiveHeight: false,
      autoplaySpeed: 7000,
      infinite: true,
      speed: 3000,
      slidesToScroll: 1,
      fade: true,
      swipeToSlide: false
  };
  return (
    <div id="home-page">
      <section id="home-landing">
        <Slider {...sliderSettings}>
          <div className="homeSlide" id="homeSlide1"></div>
          <div className="homeSlide" id="homeSlide2"></div>
          <div className="homeSlide" id="homeSlide3"></div>
        </Slider>

        <div id="home-title">
          <h1>Perth's Elite Male Escort</h1>
          <h1>for Women</h1>
          <h3>For that ultimate boyfriend experience</h3>
        </div>
      </section>

      <section id="home-welcome" className="full-container dark-section">
        <Col xsOffset={1} xs={10} mdOffset={1} md={10} lgOffset={2} lg={8}>
          <h2 className="center">Greetings my lovely,</h2>
          <p>Thank you for making your way to my site. As our society has evolved into a moreegalitarian and a less judgemental one women have been afforded opportunities to explore dimensions that heretofore had been generally open only to men. It has become far more acceptable for a woman to wish to spend time with a qualitygentleman without the complications of a commitment or a relationship. If you aresuch a woman then I encourage you to peruse this site.</p>
          <p>My name is Josh Chase, and I am a professional companion. I am the perfect solution to your dilemma.</p>
          <p>Welcome to my website - please have a look around and get to know me better, and if you feel we would be compatible, I would be delighted to hear from you.</p>
          <h3 id="home-signature" className="fancy">JC</h3>
        </Col>
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
