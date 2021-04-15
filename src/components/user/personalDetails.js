import React, { Component, Fragment } from "react";
import styles from "./user.module.css";
export default class personalDetails extends Component {
  render() {
    return (
      <section className="container">
        <h2 className={styles.personaldetails}>personal details</h2>
      
        <form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">First Name:</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Last Name:</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Gender:</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">EmailID:</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Mobile:</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  
  <button type="submit" class="btn btn-primary">Ugrade</button>
</form>

      </section>
    );
  }
}
