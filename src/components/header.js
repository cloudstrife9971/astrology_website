import React, { Component } from "react";
import "./css/header.css";
import Logo from "./logo.png";
export default class header extends Component {
  render() {
    return (
      <header className="header">
        <a className='logo-container' href="">
          <img className="logo" src={Logo} alt="logo" />
        </a>
        <a className='find-astro' href="">
            find astrologers
        </a>
        <button className='sign-in-btn'>
            sign in
        </button>
      </header>
    );
  }
}
