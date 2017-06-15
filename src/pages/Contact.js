import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Contact extends Component {
  render() {
    return (
      <div className="dark-bg">
        <Grid>
            <Row >
              <Col xs={12} sm={7}>
              <Row left="xs">
                  <h1>The dreaded first contact... </h1>
                  <h2>
                  If you are here contacting me for the first time then please don't feel nervous as I can understand your apprehension and I shall endeavour to put you at ease.</h2>
                  </Row> 
              <Row left="xs">
                  <h2>
              If you would feel more comfortable with sending a text or an email, please feel free to do so. In order to maintain the mystique of our dealings, the majority of my clients prefer to communicating in writing to discuss the finer details.
                </h2>
              </Row>
              <Row left="xs">
                  <h2>
              In order to maintain the mystique of our dealings, the majority of my clients prefer to communicate in writing to discuss the finer details.
                </h2>
              </Row>
          
            </Col>
            <Col sm={1}/>
            <Col xs={12} sm={4}>
              <Row left="xs">
                   <h1>
          Phone: +61 to be advised
          </h1>
             
              <h1>
          Email: companionjosh@yahoo.com
          </h1>
         </Row>
            </Col>
          </Row>
        </Grid> 
       
      </div>
          
    );
  }
}
