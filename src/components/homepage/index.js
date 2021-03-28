import React, { Component } from "react";
import Jumbotron from "./jumbotron";
import HowItWorks from './howItWorks'
import FeaturedAstrologers from './featuredAstrologers'
import Testimonials from "./testimonials.js"
import Footer from "./footer"
export default class index extends Component {
  render() {
    return (
      <section>
        <Jumbotron showModal={this.props.showModal}></Jumbotron>
        <HowItWorks></HowItWorks>
        <FeaturedAstrologers></FeaturedAstrologers>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </section>
    );
  }
}
