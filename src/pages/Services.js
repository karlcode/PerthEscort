import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';


export default class Services extends Component {
  render() {
    return (
       <div className="dark-bg">
        <Grid fluid >
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <h1><b>Services Offered</b></h1>
              </Row>
              <hr/>
              <Row center="xs" around="xs" className="hoverable">
                <Col xs={3}><h2>Affectionate kissing</h2>
                            <h2>Cuddling and touching</h2>
                            <h2>Mutual French</h2>
                             </Col>
                <Col xs={3}><h2>Shower for two</h2>
                            <h2>Passionate kissing</h2>
                            <h2>Oral</h2>
                            <h2>French kissing</h2> </Col>
                <Col xs={3}><h2>Sensual body massage</h2>
                            <h2>Variety of positions</h2>
                            <h2>Mutual masturbation</h2></Col>
                <Col xs={3}><h2>Stripping</h2>
                            <h2>2 girls | 1 guy</h2>
                            <h2>Couples</h2>
                            <h2>Tight bondage</h2></Col>
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
                <h1>Therapeutic Body Service</h1>
                <hr/>
                <Row center="xs">
                  <Col xs={8}><h2>Sensual Body Rub</h2></Col>
                  <Col xs={4}><h2>$120 / 1 hour</h2></Col>
                </Row>
                <Row center="xs">
                  <Col xs={8}><h2>Tantric Yoni Massage</h2></Col>
                  <Col xs={4}><h2>$120 / 1 hour</h2></Col>
                </Row>
                <Row center="xs">
                  <Col xs={8}><h2>Erotic Latino Massage (inc. body rub)</h2></Col>
                  <Col xs={4}><h2>$200 / 2 hours</h2></Col>
                </Row>  
                </Col>
                <Col sm={1}/>
                <Col xs={12} sm={5} className="light-panel">
                <h1>Erotic Sensual Playdates</h1>
                <hr/>
                <Row center="xs">
                  <Col xs={8}><h2>Cocktail Play Date</h2></Col>
                  <Col xs={4}><h2>$150 / 1 hour</h2></Col>
                </Row>
                <Row center="xs">
                  <Col xs={8}><h2>Sensual Fun and Play</h2></Col>
                  <Col xs={4}><h2>$280 / 2 hours</h2></Col>
                  
                </Row>
                <Row center="xs">
                  <Col xs={8}><h2>Sensual Rendezvous </h2></Col>
                  <Col xs={4}><h2>$400 / 3 hours</h2></Col>
                  
                </Row>
                <Row center="xs">
                  <Col xs={8}><h2>Dinner and Dessert Date </h2></Col>
                  <Col xs={4}><h2>$500 / 4 hours</h2></Col>
                  
                </Row>
                <Row center="xs">
                  <Col xs={8}><h2>Night of Bliss (overnight) </h2></Col>
                  <Col xs={4}><h2>$1200 / 8-12 hours</h2></Col>
                  
                </Row>  
                </Col>
                
              </Row>
            </Col>
          </Row>
        </div>
      </Grid> 
       
      </div>
    );
  }
}
