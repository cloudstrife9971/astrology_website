import React, { Component, Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Header from "./components/header";
import Homepage from "./components/homepage/index.js";
import Athentication from "./components/authentication";
import Astrologers  from "./components/astrologers/index.js";
import Packs from "./components/packs/index.js"
export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Athentication></Athentication> */}
        <Header></Header> 
        {/* <Homepage></Homepage> */}
        {/* <Astrologers></Astrologers> */}
        {/* <Packs></Packs> */}
      </Fragment>
    );
  }
}
