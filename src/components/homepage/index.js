import React, { Component } from "react";
import Jumbotron from "./jumbotron";
import HowItWorks from './howItWorks'
import FeaturedAstrologers from './featuredAstrologers'
export default class index extends Component {
  render() {
    return (
      <section>
        <Jumbotron></Jumbotron>
        <HowItWorks></HowItWorks>
        <FeaturedAstrologers></FeaturedAstrologers>
      </section>
    );
  }
}
