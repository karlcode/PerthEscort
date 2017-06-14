import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Services extends Component {
  render() {
    return (
       <div className="dark-bg">
        <Grid>
          <Row>
            <Col xs={12}>
              <Row left="xs">
                <h1>Services offered (in the privacy of your home or hotel room)</h1>
              </Row>
              <Row left="xs" around="xs">
                <Col xs={2}><li>Affectionate kissing</li>
                            <li>Cuddling and touching</li>
                            <li>Mutual French</li>
                            <li>Light bondage</li> </Col>
                <Col xs={2}><li>Shower for two</li>
                            <li>Passionate kissing</li>
                            <li>Oral</li>
                            <li>French kissing</li> </Col>
                <Col xs={2}><li>Sensual body massage</li>
                            <li>Variety of positions</li>
                            <li>Mutual masturbationg</li></Col>
                <Col xs={2}><li>Stripping</li>
                            <li>2 girls | 1 guy</li>
                            <li>Couples</li></Col>
              </Row>
            </Col> 
          </Row>
        <div className="dark-bg">
          <Row>
            <Col xs={12}>
              <Row center="xs" around="xs">
                <Col xs={12} md={5}><h1>Therapeutic body service</h1> </Col>
                <Col xs={12} md={5}><h1>Erotic sensual playdates</h1></Col>
               
              </Row>
            </Col>
          </Row>
        </div>
      </Grid> 
       
      </div>
    );
  }
}
