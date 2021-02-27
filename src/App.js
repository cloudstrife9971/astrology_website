import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/header";
import Homepage from "./components/homepage/index.js";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Header></Header> */}
        <Homepage></Homepage>
      </Fragment>
    );
  }
}
