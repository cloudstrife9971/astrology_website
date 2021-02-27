import React, { Component } from "react";
import "./css/common.css";
import levi from "./levi.jpg";
export default class featuredAstrologers extends Component {
  render() {
    return (
      <section className="section bg-color">
        <div className="container">
          <h2 className="heading">featured astrologers</h2>
          <h3 className="subheading">
            Choose from a wide array of reputed astrologers with immense
            experience in the science of astrology
          </h3>
         <div className='card-container'>
          <div className="row">
            <div className="col-md-3">
              <div className="custom-card">
                <div className="img-container">
                  <img className="img" src={levi} alt="" />
                </div>
                <div className="body">
                  <h4 className="title">lorem ipsum</h4>
                  <p className="sub-title">Languages: English, Malayalam</p>
                  <p className="copy">
                    Numerology, Palmistry, Thantric &amp; Mantra Sastra
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="custom-card">
                <div className="img-container">
                  <img className="img" src={levi} alt="" />
                </div>
                <div className="body">
                  <h4 className="title">lorem ipsum</h4>
                  <p className="sub-title">Languages: English, Malayalam</p>
                  <p className="copy">
                    Numerology, Palmistry, Thantric &amp; Mantra Sastra
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="custom-card">
                <div className="img-container">
                  <img className="img" src={levi} alt="" />
                </div>
                <div className="body">
                  <h4 className="title">lorem ipsum</h4>
                  <p className="sub-title">Languages: English, Malayalam</p>
                  <p className="copy">
                    Numerology, Palmistry, Thantric &amp; Mantra Sastra
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="custom-card">
                <div className="img-container">
                  <img className="img" src={levi} alt="" />
                </div>
                <div className="body">
                  <h4 className="title">lorem ipsum</h4>
                  <p className="sub-title">Languages: English, Malayalam</p>
                  <p className="copy">
                    Numerology, Palmistry, Thantric &amp; Mantra Sastra
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    );
  }
}
