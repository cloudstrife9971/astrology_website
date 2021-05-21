import React, { Component, Fragment } from "react";
import RegisterForm from "./registerForm.js";
import UpdateForm from "./updateForm.js";
import AstrologerList from "./astrologerList.js";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";
export default class index extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    // console.log(config)
    axios
      .get("http://localhost:4000/astrologer/getAstrologerList")
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
      });
  }
  render() {
    // console.log(this.state.persons)   
    // console.log(this.state.persons.data && this.state.persons.data.length)
    return (
      <Fragment>
        <Route path="/admin">
          <RegisterForm></RegisterForm>
        </Route>
        <Route path="/admin/update">
          <UpdateForm></UpdateForm>
        </Route>
        <AstrologerList AstrologerList={this.state.persons}></AstrologerList>
      </Fragment>
    );
  }
}
