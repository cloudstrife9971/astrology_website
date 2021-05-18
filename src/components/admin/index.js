import React, { Component, Fragment } from "react";
import RegisterForm from "./registerForm.js";
import UpdateForm from "./updateForm.js";
import AstrologerList from "./astrologerList.js";
import { Route, Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/admin">
          <RegisterForm></RegisterForm>
        </Route>
        <Route path="/admin/update">
          <UpdateForm></UpdateForm>
        </Route>
        <AstrologerList></AstrologerList>
      </Fragment>
    );
  }
}
