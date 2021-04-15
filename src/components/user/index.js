import React, { Component } from "react";
import styles from "./user.module.css";
import ReachargeHis from "./reachargeHis.js";
import Callhistory from "./callHis.js";
import PersonalDetails from "./personalDetails.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class UserInfo extends Component {
  render() {
    return (
      <section className="container">
        <div className={styles.userinfo}>
          <div className={styles.userinfo__head}>
            <div className={styles.userinfo__head__title}>
              Your current balance is :
              <i>
                {" "}
                <span className={styles.userinfo__head__subtitle}>
                  ₹ 0.00/ $ 0.00
                </span>
              </i>
            </div>
            <button className={styles.userinfo__head__btn}>
              reacharge now
            </button>
          </div>
          
            <Switch>
              <Route path="/recharge-history">
                <ReachargeHis></ReachargeHis>
              </Route>
              <Route path="/call-history">
                <Callhistory></Callhistory>
              </Route>
              <Route path="/personal-deatils">
                <PersonalDetails></PersonalDetails>
              </Route>
            </Switch>
        
        </div>
      </section>
    );
  }
}
