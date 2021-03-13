import React, { Component, Fragment } from "react";
import styles from "./style.module.css";

export default class PriceCard extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.item__container}>
          <h2 className={styles.item__title}>bronze</h2>
          <div className={styles.item__price}>₹ 200</div>
          <span className={styles.item__btn}>select pack</span>
        </div>
      </Fragment>
    );
  }
}
