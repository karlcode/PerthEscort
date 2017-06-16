import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class FAQ extends Component {
  render() {
    return (
       <div>
         <div className="dark-bg">
            <Grid>
              <Row >
                <Col xs={12}>
                  <Row left="xs">
                      <h1>What exactly do you offer?</h1> 
                  </Row>
                  <p>I offer a woman the opportunity to feel special in the way that is important to her; mentally, emotionally, physically, and spiritually. My desire is to:
                    <li>	Provide a connection of warm affection, passionate pleasure and tender romance</li>
                    <li>	Share an experience she will always remember</li>
                    <li>	Ease stress through massage, share laughter, and intimate conversation.</li>
                    <li>Offer safe companionship, intellectually stimulating conversation, and trustworthy friendship</li>
                    <li>Introduce a woman to the amazing person she truly is</li>
                  </p>
                </Col>
              </Row>
            </Grid> 
          </div>
          <div className="light-bg">
            <Grid>
              <Row>
                <Col xs={12}>
                  <Row left="xs">
                      <h1>Are the photos on your site really of you?</h1>
                  </Row>
                  <p>Yes, absolutely! Each one represents me accurately and I am confident you will be pleased with my appearance. I take great pride in maintaining my exquisite grooming.</p>
                </Col>
              </Row>
            </Grid> 
          </div>
          <div className="dark-bg">
            <Grid>
              <Row>
                <Col xs={12}>
                   <Row left="xs">
                      <h1>Why do you blur your face in your photos?</h1>
                  </Row>
                  <p>I shadow my face for both my privacy and the privacy of those I see. However, I can provide facial pictures before you go ahead with a booking.</p>
                </Col>
              </Row>
            </Grid> 
          </div>
          <div className="light-bg">
            <Grid>
              <Row>
                <Col xs={12}>
                   <Row left="xs">
                      <h1>What will you wear for our date?</h1>
                  </Row>
                  <p>While I am always stylish and tastefully dressed, please let me know before our date your specific preference for my appearance. My personal style is classic, elegant and trendy.</p>
                </Col>
              </Row>
            </Grid> 
          </div>
          <div className="dark-bg">
            <Grid>
              <Row>
                <Col xs={12}>
                  <Row left="xs">
                      <h1>What sets you apart from others?</h1> 
                  </Row>
                  <p>I am well-traveled and intellectual; not your typical companion. During my previous modeling career I garnered many real-world experiences that have enabled me to be a professional, reliable, well-mannered and respected male companion. You can be assured that I will always communicate effectively and be on time and ready to have fun.
                  </p>
                </Col>
              </Row>
            </Grid> 
          </div>
          <div className="light-bg">
            <Grid>
              <Row>
                <Col xs={12}>
                  <Row left="xs">
                      <h1>"It's my first time and I am feeling bit nervous and shy"</h1>
                  </Row>
                  <p>I completely understand and it's perfectly normal to feel shy or apprehensive at first. I am confident we can find a common language and put a smile on your face. Simply send me a text or email me and let me know what you have in mind. We can always chat via text, phone or email when you feel comfortable. During a session, to break the ice we can start by having a drink and snacks in a relaxed atmosphere and have a conversation to get to know each other a little bit better. Once you feel comfortable and more confident, we'll take it from there. I can always guide you through but I will not do anything that you are not comfortable with. The idea is to have an enjoyable and fun time and fulfill all your fantasies.</p>
                </Col>
              </Row>
            </Grid> 
          </div>
       </div>
    );
  }
}
