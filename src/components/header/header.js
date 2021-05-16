import React, { Component } from "react";
import "../css/header.css";
import Logo from "./apna2crop.jpg";
import usericon from "./iconfinder_account-circle_326497 (1).png";
import arrowicon from "./iconfinder_down-bottom-arrow_2931160.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="header__header">
            <Link className="header__logo-container" to="/">
              <img className="header__logo" src={Logo} alt="logo" />
            </Link>
            <Link className="header__find-astro" to="/astrologers">
              find astrologers
            </Link>
            <Link
              to="/Login/Register"
              className="header__login-btn"
              onClick={this.props.showModal}
            >
              Login / Register
            </Link>
            <button className="header__userbtn">
              <div className="header__userbtn__user-icon">
                <img src={usericon} alt="" />
                <span className="header__userbtn__status"></span>
              </div>
              <img
                className="header__userbtn__arrow-icon"
                src={arrowicon}
                alt=""
              />
              <div class="header__userbtn__dropdown-content">
                <Link to="/recharge-history">Recharge History</Link>
                <Link to="/call-history">Call History</Link>
                <Link to="/personal-deatils">Personal Details</Link>
                <Link to="/faq">FAQ</Link>
              </div>
            </button>
          </div>
        </div>
      </header>
    );
  }
}
