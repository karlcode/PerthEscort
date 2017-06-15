import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';



class Footer extends Component {
  render() {
    return (
    <footer>
        <div className="footer-bg">
            <Grid>
                <Row center="xs">
                    <h2> Josh Chase</h2>
                </Row>
                <Row center="xs">
                    <Col xs={4}><h2> FB icon</h2></Col>
                    <Col xs={4}><h2> companionjosh@gmail.com</h2></Col>
                    <Col xs={4}><h2> 0412 345 678</h2></Col>
                </Row>
                <Row center="xs">
                   <h4>Made by Loaft Digital Design </h4>
                </Row>
                <Row center="xs">
                   <h4>©2017. All Rights Reserved </h4>
                </Row>
            </Grid>
        </div>
    </footer>
    );
  }
}

export default Footer;