import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import portraitShirtless from './images/about/josh-portrait-shirtless.jpg';
import map from './images/about/world-map.png';

import slide1 from './images/about/slide1.jpg';
import slide2 from './images/about/slide2.jpg';
import slide3 from './images/about/slide3.jpg';
import slide4 from './images/about/slide4.jpg';
import slide5 from './images/about/slide5.jpg';
import slide6 from './images/about/slide6.jpg';
import slide9 from './images/josh-bed.jpg';
import slide7 from './images/about/slide7.jpg';
import slide8 from './images/about/slide8.jpg';



import Slider from 'react-slick';
export default class About extends Component {
  render() {

    var sliderSettings = {
      arrows: false,
      autoplay: true,
      dots: true,
      adaptiveHeight: false,
      autoplaySpeed: 2500,
      infinite: true,
      speed: 3000,
      slidesToScroll: 1,
      variableWidth: true
    };

    return (
      <div>

        <div id="about-row1" className="full-container dark-section">
          <Row>
            <Col sm={3} mdOffset={0} md={4} lgOffset={1} lg={3} className="hidden-md-down">
              <img src={portraitShirtless} alt="hi" className="img-responsive"/>
            </Col>
            <Col xsOffset={1} xs={10} mdOffset={1} md={6} lgOffset={1} lg={5}>
                <h1>About Me</h1>
                <p>I am 36 years old, of Latin origin, fair skinned and dark haired, well hung, handsome, stunning hazel eyes with a toned and lean body, I stand 6ft tall. I have enjoyed a fantastic modelling career, both on the runway and for magazines. I also enjoy the entrepreneurial satisfaction of running my own business. In either location, I savour both the simple things and the finer pleasures in life, and of course, being a sensual companion/straight male escort is one of the finer.
                </p>
            </Col>
          </Row>
        </div>

        <div id="about-row2" className="full-container light-section">
          <Row>
            <Col xsOffset={1} xs={10} smOffset={3} sm={6}>
              <p>Between traveling with my parents, whose business kept them continually abroad, and traveling as an adult, I have visited over 30 countries across the five continents. I count Great Britain, Spain, France, Italy, Brazil, Dubai and of course, Australia among my favourites; with the added pleasure of having called each of these countries home at one time.
              </p>
            </Col>
            <Col xsOffset={1} xs={10} smOffset={3} sm={6}>
              <p>My experiences living and working as a local in the myriad of different cultures helped mould me into a worldly and cultured gentleman. This has developed a most valuable attribute in me which is to adapt to people and any given situation, making you feel relaxed as if we have known each other for years.
              </p>
            </Col>
          </Row>
        </div>

        <div id="about-row3">
          <Slider {...sliderSettings}>
            <div><img src={slide1}/></div>
            <div><img src={slide2}/></div>
            <div><img src={slide3}/></div>
            <div><img src={slide4}/></div>
            <div><img src={slide5}/></div>
            <div><img src={slide6}/></div>
            <div><img src={slide9}/></div>
            <div><img src={slide7}/></div>
            <div><img src={slide8}/></div>
          </Slider>
        </div>

        <div id="about-row4" className="full-container dark-section">
          <Row>
            <Col xsOffset={1} xs={10} smOffset={3} sm={6}>
              <p>I love to have a good time, meet new people and experience new things. I am a great listener, enjoy stimulating conversation and can converse on all levels.
              </p>
            </Col>
            <Col xsOffset={1} xs={10} smOffset={3} sm={6}>
              <p>I am D &amp; D free, I have no cosmetic mutilations of the flesh of any kind nor do I smoke but I don&#39;t mind if you wish to do so. I practice safe sex and get regular health check-ups done. I am meticulously clean and naturally will expect the same excellence of personal hygiene of you as well.
              </p>
            </Col>
          </Row>
        </div>

      </div>
    );
  }
}
