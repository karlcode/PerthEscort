import React, { Component } from 'react';

export default class Home extends Component {
render() {
  return (
    <div id="home-page">
      <section id="home-landing">
        <div id="home-title">
          <h1 className="fancy">Josh Chase</h1>
          <h3 className="fancy">perth's elite female companion</h3>
        </div>
        <i id="home-down" className="fa fa-angle-double-down" aria-hidden="true"></i>
      </section>

      <section className="panel container">
        <h1 className="center">Welcome my lovely,</h1>
        <p>Thank you for making your way to my site. As our society has evolved into a more egalitarian and a less judgemental one women have been afforded opportunities to explore dimensions that heretofore had been generally open only to men. It has become far more acceptable for a woman to wish to spend time with a quality gentleman without the complications of a commitment or a relationship. If you are such a woman then I encourage you to peruse this site.</p>
        <p>My name is Josh Chase, and I am a professional companion. I am the perfect solution to your dilemma.</p><p>Welcome to my website - please have a look around and get to know me better, and if you feel we would be compatible, I would be delighted to hear from you.</p>
      </section>
      
    </div>
    );
  }
}
