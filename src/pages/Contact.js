import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Contact extends Component {
  render() {
    return (
      <div className="dark-bg">
        <Grid>
            <Row>
              <Col xs={12} md={8}>
              <Row left="xs">
                   <h1>The dreaded first contact </h1>

          If you are contacting me for the first time then please don't be nervous, I can understand your

          apprehension, I shall endeavour to put you at ease. If you would feel more comfortable with sending
          a text or an email please do so. In order to maintain the mystique of our dealings, majority of my

          clients prefer to communicating in writing to discuss the finer details.

          Phone: +61 to be advised email: companionjosh@yahoo.com
         
              </Row>
          
            </Col>
            <Col xs={12} md={4}>
              <Row right="xs">
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
