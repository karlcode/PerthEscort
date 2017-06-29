import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';



class Footer extends Component {
  render() {
    return (
    <footer>
        <div className="footer-bg full-container ">
            <Grid>
                <Row center="xs">
                    <h3> Josh Chase</h3>
                </Row>
                <Row center="xs">
                    <Col xs={12} sm={6} md={4}><p><i className="fa fa-phone" aria-hidden="true"></i> +61 412 345 678</p></Col>
                    <Col xs={12} sm={6} md={4}><p><i className="fa fa-envelope-o" aria-hidden="true"></i> companionjosh@gmail.com</p></Col>
                    <Col xs={12} sm={12} md={4}><p><i className="fa fa-facebook-square" aria-hidden="true"></i> Follow me on Facebook</p></Col>
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