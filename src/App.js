import React, { Component, Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Header from "./components/header";
import Homepage from "./components/homepage/index.js";
import Athentication from "./components/authentication";
import Astrologers from "./components/astrologers/index.js";
import Packs from "./components/packs/index.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    // console.log(this.state.show)
    return (
      <Fragment>
        <Router>
          <Header showModal={this.showModal}></Header>
          <Switch>
            <Route exact path="/"><Homepage showModal={this.showModal}></Homepage></Route>
            <Route path="/astrologers"><Astrologers showModal={this.showModal}></Astrologers></Route>
            <Route path="/Login/Register">
           <Packs></Packs>
            </Route>
          </Switch>
          <Athentication show={this.state.show} hideModal={this.hideModal}></Athentication>
        </Router>
      </Fragment>
    );
  }
}
