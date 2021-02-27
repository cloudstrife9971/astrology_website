import React, { Component } from "react";
import "./css/jumbotron.css";
export default class jumbotron extends Component {
  render() {
    return (
      <section className="hero-img-container">
        <div className="hero-txt-container container">
            {/* <div className='row'> */}
          <h2 className="heading-first col-md-9">
            astrological advice <span>from</span>
          </h2>
          <h2 className="heading-second">world class expert</h2>
          <h3 className="sub-heading">
            Get in touch with astroTalk's top professional astrologers. Tap their
            expertise and deep knowledge.
          </h3>
          <div className='cta-container'>
            <button className="cta-btn">find your expert</button>
            <a href="" className="learn-more">
              Learn more
            </a>
          </div>
          </div>
        {/* </div> */}
      </section>
    );
  }
}
