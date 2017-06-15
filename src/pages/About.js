import React, { Component } from 'react';
import picture from './images/joshyboys-images/IMG_9113.JPG';
import second from './images/joshyboys-images/IMG_9122.JPG';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Slider from 'react-slick';
export default class About extends Component {
  render() {
    var settings = {
      autoplay: true,
      adaptiveHeight: false,
      autoplaySpeed: 2500,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
      <div className="content">
      <div className="dark-bg">
      <Grid fluid>
      <Row middle="xs">
      <Col xs={12} sm={4}>
        <img src={picture} alt="hi"/>
      </Col>
      <Col sm={2}/>
      <Col xs={12} sm={6}>
      <Row end="xs">
          <h2>I am 36 years old, of Latin origin, fair skinned and dark haired, well hung, handsome,

stunning hazel eyes with a toned and lean body, I stand 6ft tall. I have enjoyed a

fantastic modelling career, both on the runway and for magazines. I also enjoy the

entrepreneurial satisfaction of running my own business. In either location, I savour

both the simple things and the finer pleasures in life, and of course, being a sensual

companion/straight male escort is one of the finer.

Between traveling with my parents, whose business kept them continually abroad,

and traveling as an adult, I have visited over 30 countries across the five continents.

I count Great Britain, Spain, France, Italy, Brazil, Dubai and of course, Australia

among my favourites; with the added pleasure of having called each of these

countries home at one time. </h2>
      </Row>
      </Col>
      </Row>
      </Grid>
      </div>
      </div>
      <div className="light-bg">
        <Grid fluid>
        <Row middle="xs">
          <Col xs={12} sm={6}>
            <Row left="xs" >
              <h2>
        My experiences living and working as a local in the

myriad of different cultures helped mould me into a worldly and cultured gentleman.

This has developed a most valuable attribute in me which is to adapt to people and

any given situation, making you feel relaxed as if we have known each other for

years. I love to have a good time, meet new people and experience new things. I am

a great listener, enjoy stimulating conversation and can converse on all levels.

I am D &amp; D free, I have no cosmetic mutilations of the flesh of any kind nor do I

smoke but I don&#39;t mind if you wish to do so. I practice safe sex and get regular health

check-ups done. I am meticulously clean and naturally will expect the same

excellence of personal hygiene of you as well.
      </h2>
            </Row>
          </Col>
          <Col sm={2}/>
          <Col xs={12} sm={4}>
          <img src={second} alt="hi"/>
          </Col>
        </Row>
      </Grid> 
    </div>
    <div className="dark-bg">
    <Grid fluid>
      <Row>
        <Col xs={12}>
          <Row center="xs" around="xs">
           
            <Col xs={10}>
            <Slider {...settings}>
              <div><h1><i>"Josh is one of the very few top class escorts based in Perth, I booked him straight away due to his professional well written profile and positive reviews, he was exactly what I wanted. The perfect Boyfriend experience. I was very specific with what I asked for, a few drinks, a home cooked dinner, and a snug movie on the couch. I wasn't after sex, or a man to want to jump my bones, quite the opposite, I wanted a man who could hold down decent and intellectual conversation, rub my shoulders and genuinely enjoy my company." </i></h1></div>
              <div><h1><i>"Josh is one of the very few top class escorts based in Perth, I booked him straight away due to his professional well written profile and positive reviews, he was exactly what I wanted. The perfect Boyfriend experience. I was very specific with what I asked for, a few drinks, a home cooked dinner, and a snug movie on the couch. I wasn't after sex, or a man to want to jump my bones, quite the opposite, I wanted a man who could hold down decent and intellectual conversation, rub my shoulders and genuinely enjoy my company." </i></h1></div>
              <div><h1><i>"Josh is one of the very few top class escorts based in Perth, I booked him straight away due to his professional well written profile and positive reviews, he was exactly what I wanted. The perfect Boyfriend experience. I was very specific with what I asked for, a few drinks, a home cooked dinner, and a snug movie on the couch. I wasn't after sex, or a man to want to jump my bones, quite the opposite, I wanted a man who could hold down decent and intellectual conversation, rub my shoulders and genuinely enjoy my company." </i></h1></div>
              
            </Slider>
            </Col>
              
              
          </Row>
          
        </Col>
      </Row>
    </Grid> 
    </div>
    
  </div>
    );
  }
}
