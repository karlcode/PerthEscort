import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Contact extends Component {
  render() {
    return (
      <div className="dark-bg">
        <Grid>
            <Row middle="xs">
              <Col xs={12} sm={7}>
              <Row left="xs">
                  <h2>The dreaded first contact... </h2>
                  <p>
                  If you are here contacting me for the first time then please don't feel nervous as I can understand your apprehension and I shall endeavour to put you at ease.</p>
                  </Row> 
              <Row left="xs">
                  <p>
              If you would feel more comfortable with sending a text or an email, please feel free to do so.
                </p>
              </Row>
              <Row left="xs">
                  <p>
              In order to maintain the mystique of our dealings, the majority of my clients prefer to communicate in writing to discuss the finer details.
                </p>
              </Row>
          
            </Col>
            <Col sm={1}/>
            <Col xs={12} sm={4}>
              <Row left="xs">
                <p>
                <i className="fa fa-facebook-square" aria-hidden="true"></i> Follow me on FB
                </p>
              </Row>
              <Row left="xs">
                <p>
               <i className="fa fa-phone" aria-hidden="true"></i>  +61 433 444 444
                </p>
              </Row>
              <Row left="xs">
                <p><a href="mailto:someone@yoursite.com">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>  companionjosh@yahoo.com</a>  
                </p>
              </Row>
            </Col>
          </Row>
        </Grid> 
       
      </div>
          
    );
  }
}
