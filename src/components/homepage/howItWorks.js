import React, { Component } from "react";
import "./css/common.css";
import wallet__img from "./wallet.jpg";
export default class howItWorks extends Component {
  render() {
    return (
      <section className="section">
        <div className="container ">
          <h2 className="heading">how astrotalk works</h2>
          <h3 className="subheading">
            astrotalk is simple and quick.learn how to avail our services
          </h3>
          <ul className="list-container">
            <li className="list-items">
              <div className="icon">
                <img className="wallet-img" src={wallet__img} alt="" />
              </div>
              <div className="txt">Lorem Ipsum</div>
            </li>
            <li className="list-items">
              <div className="icon">
                {" "}
                <img className="wallet-img" src={wallet__img} alt="" />
              </div>
              <div className="txt">Lorem Ipsum</div>
            </li>
            <li className="list-items">
              <div className="icon">
                {" "}
                <img className="wallet-img" src={wallet__img} alt="" />
              </div>
              <div className="txt">Lorem Ipsum</div>
            </li>
            <li className="list-items">
              <div className="icon">
                {" "}
                <img className="wallet-img" src={wallet__img} alt="" />
              </div>
              <div className="txt">Lorem Ipsum</div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
