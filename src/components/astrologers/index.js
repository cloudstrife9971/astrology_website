import React, { Component, Fragment } from "react";

import Astrologersheader from "./astrologersheader";
import AstrologerCard from "./astrologerCard";
export default class Astrologers extends Component {
  render() {
    return (
      <Fragment>
        <Astrologersheader></Astrologersheader>
          <AstrologerCard showModal={this.props.showModal}></AstrologerCard>
      </Fragment>
    );
  }
}
