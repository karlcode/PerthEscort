import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';


export default class Services extends Component {
  render() {
    return (
       <div className="dark-bg">
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <h1>Services offered</h1>
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
          
        <Grid>
        <div className="dark-bg">
          <Row>
            <Col xs={12}>
              <Row center="xs" around="xs">
                <Col xs={12} sm={5}>
                <h1>Therapeutic body service</h1>
                <Row>
                  <h2>Sensual Body Rub  $120 / 1 hour</h2>
                </Row>
                <Row>
                  <h2>Sensual Body Rub  $120 / 1 hour</h2>
                </Row>
                <Row>
                  <h2>Sensual Body Rub  $120 / 1 hour</h2>
                </Row>  
                </Col>
                <Col xs={12} sm={5}><h1>Erotic sensual playdates</h1></Col>
               
              </Row>
            </Col>
          </Row>
        </div>
      </Grid> 
       
      </div>
    );
  }
}
