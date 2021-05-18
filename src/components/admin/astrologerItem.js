import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
export default class AstrologerItem extends Component {
  render() {
    return (
      <Link to="/admin/update">
      <div className="astrologer-card"  >
        <div className="custom-card-img"></div>
        <div className="astrologer-details">
          <h4 className="astro-name">nnitin</h4>
          <h5 className="astro-skills">vedic,gemology</h5>
          <h5 className="astro-lang">hindi</h5>
          <h5 className="astro-exp">Exp:5 Years</h5>
          <h5 className="astro-price">
            <span>$</span>
            <span>20</span>/min
          </h5>
        </div>
        <div>
          <button className="astro-call-btn" onClick={this.props.showModal}>
            call
          </button>
        </div>
      </div>
      </Link>
    );
  }
}
