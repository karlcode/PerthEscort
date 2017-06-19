import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Slider from 'react-slick';

export default class Services extends Component {
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
       <div className="dark-bg">
        <Grid fluid >
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <h1>Services Offered</h1>
              </Row>
              <hr/>
              <Row center="xs" around="xs" className="hoverable">
                <Col xs={3}><p>Affectionate kissing</p>
                            <p>Cuddling and touching</p>
                            <p>Mutual French</p>
                             </Col>
                <Col xs={3}><p>Shower for two</p>
                            <p>Passionate kissing</p>
                            <p>Oral</p>
                            <p>French kissing</p> </Col>
                <Col xs={3}><p>Sensual body massage</p>
                            <p>Variety of positions</p>
                            <p>Mutual masturbation</p></Col>
                <Col xs={3}><p>Stripping</p>
                            <p>2 girls | 1 guy</p>
                            <p>Couples</p>
                            <p>Tight bondage</p></Col>
              </Row>
            </Col> 
          </Row>
          </Grid>
          
        <Grid fluid >
        <div className="dark-bg">
          <Row >
            <Col xs={12}>
              <Row center="xs" around="xs">
                <Col xs={12} sm={5} className="light-panel">
                <p>Therapeutic Body Service</p>
                <hr/>
                <Row center="xs">
                  <Col xs={8}><p>Sensual Body Rub</p></Col>
                  <Col xs={4}><p>$120 / 1 hour</p></Col>
                </Row>
                <Row center="xs">
                  <Col xs={8}><p>Tantric Yoni Massage</p></Col>
                  <Col xs={4}><p>$120 / 1 hour</p></Col>
                </Row>
                <Row center="xs">
                  <Col xs={8}><p>Erotic Latino Massage (inc. body rub)</p></Col>
                  <Col xs={4}><p>$200 / 2 hours</p></Col>
                </Row>  
                </Col>
                <Col sm={1}/>
                <Col xs={12} sm={5} className="light-panel">
                <p>Erotic Sensual Playdates</p>
                <hr/>
                <Row center="xs">
                  <Col xs={8}><p>Cocktail Play Date</p></Col>
                  <Col xs={4}><p>$150 / 1 hour</p></Col>
                </Row>
                <Row center="xs">
                  <Col xs={8}><p>Sensual Fun and Play</p></Col>
                  <Col xs={4}><p>$280 / 2 hours</p></Col>
                  
                </Row>
                <Row center="xs">
                  <Col xs={8}><p>Sensual Rendezvous </p></Col>
                  <Col xs={4}><p>$400 / 3 hours</p></Col>
                  
                </Row>
                <Row center="xs">
                  <Col xs={8}><p>Dinner and Dessert Date </p></Col>
                  <Col xs={4}><p>$500 / 4 hours</p></Col>
                  
                </Row>
                <Row center="xs">
                  <Col xs={8}><p>Night of Bliss (overnight) </p></Col>
                  <Col xs={4}><p>$1200 / 8-12 hours</p></Col>
                  
                </Row>  
                </Col>
                
              </Row>
            </Col>
          </Row>
        </div>
      </Grid> 
      <Grid fluid>
      <Row>
        <Col xs={12}>
          <Row center="xs" around="xs">
           
            <Col xs={12} sm={8}>
            <h1>What My Guests Have Said About Me</h1>
            <Slider {...settings}>
              <div><p><i>"Josh is one of the very few top class escorts based in Perth, I booked him straight away due to his professional well written profile and positive reviews, he was exactly what I wanted. The perfect Boyfriend experience. I was very specific with what I asked for, a few drinks, a home cooked dinner, and a snug movie on the couch. I wasn't after sex, or a man to want to jump my bones, quite the opposite, I wanted a man who could hold down decent and intellectual conversation, rub my shoulders and genuinely enjoy my company." </i></p></div>
              <div><p><i>"Josh is just as he describes in his profile and I booked him for a 3 hour dinner date. I'd been in Sydney on business and had a free evening so decided to take the plunge. I was feeling a bit nervous before hand but I was put at ease as soon as I met him. He's a real gentleman and we enjoyed a lovely dinner together, chatting easily about all sorts of things before we went up to my hotel room." </i></p></div>
              <div><p><i>"It was with great pleasure that I had a wonderful rendezvous with this handsome, young escort. Josh is the epitome of a gentleman and we started our evening with an early dinner at a waterfront cafe where he was very attentive and an entertaining conversationalist. We then adjourned to the hotel and the mood was set with some subtle background music and intimate play.  " </i></p></div>
              
            </Slider>
            </Col>
              
              
          </Row>
          
        </Col>
      </Row>
    </Grid>  
      </div>
    );
  }
}
