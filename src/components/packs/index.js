import React, { Component } from "react";
import PriceCard from "./price-card";
import styles from "./style.module.css";
import logo from "./wallet_icon.jpg";

export default class index extends Component {
  render() {
    return (
      <section>
        <div className={`container ${styles.hello}`} >
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.packs__container}>
                <h2 className={styles.packs__title}>
                  Choose from the list of recharge packs
                </h2>
                <h3 className={styles.packs__subtitle}>
                  Your recharge pack can be used for multiple astrologers
                </h3>
                <div className="row">
                  <div className="col-6 col-sm-4 col-lg-6">
                    <PriceCard></PriceCard>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-6">
                    <PriceCard></PriceCard>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-6">
                    <PriceCard></PriceCard>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-6">
                    <PriceCard></PriceCard>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-6">
                    <PriceCard></PriceCard>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-6">
                    <PriceCard></PriceCard>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-6">
                    <PriceCard></PriceCard>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-6">
                    <PriceCard></PriceCard>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-6">
                    <PriceCard></PriceCard>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className={styles.wallet__heading}>
                Unused balance will be saved in your wallet.
              </h3>
              <div className={styles.wallet__card}>
                <img src={logo} alt="" className={styles.wallet__img} />
                <div className={styles.wallet__title}>
                  Astroyogi Wallet
                  <span className={styles.wallet__price}>₹0.00 /-</span>
                </div>
              </div>
              <h3 className={styles.amount__heading}>Gold Recharge Pack</h3>
              <table class="table table-bordered">
                <tr>
                  <td>amount</td>
                  <td className='text-right'>₹ 1000</td>
                </tr>
                <tr>
                  <td>amount</td>
                  <td  className='text-right'>₹ 1000</td>
                </tr>
                <tr>
                  <td>amount</td>
                  <td className='text-right'>₹ 1000</td>
                </tr>
                <tr>
                  <td>amount</td>
                  <td className='text-right'>₹ 1000</td>
                </tr>
                <tr>
                  <td>amount</td>
                  <td className='text-right'>₹ 1000</td>
                </tr>
               
              </table>
              <button className={styles.pay__btn}>proceed to pay</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
