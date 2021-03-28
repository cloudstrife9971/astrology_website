import React, { Component } from "react";
import "./css/header.css";
import Logo from "./logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class header extends Component {
  render() {
    
    return (
      <header className="container">
        <div className="header__header">
          <Link className="header__logo-container" to="/">
            <img className="header__logo" src={Logo} alt="logo" />
          </Link>
          <Link className="header__find-astro" to="/astrologers">
            find astrologers
          </Link>
          <Link to="/Login/Register" className="header__login-btn" onClick={this.props.showModal}>
            Login / Register
          </Link>
        </div>
      </header>
    );
  }
}
