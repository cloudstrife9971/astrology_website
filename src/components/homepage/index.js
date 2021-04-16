import React, { Component } from "react";
import Jumbotron from "./jumbotron";
import HowItWorks from './howItWorks'
import FeaturedAstrologers from './featuredAstrologers'
import Testimonials from "./testimonials.js"
import Footer from "./footer"
import Horoscope from './horoscope.js'
export default class index extends Component {
  render() {
    return (
      <section>
        <Jumbotron showModal={this.props.showModal}></Jumbotron>
        <Horoscope></Horoscope>
        <HowItWorks></HowItWorks>
        <FeaturedAstrologers></FeaturedAstrologers>
        <Testimonials></Testimonials>
        {/* <Footer></Footer> */}
      </section>
    );
  }
}
