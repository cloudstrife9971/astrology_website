import React, { Component } from "react";
import styles from "./user.module.css";
export default class ReachargeHis extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table class="table table-bordered">
          <thead className="table-light">
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Date &amp; Time</th>
              <th scope="col">Call Pack</th>
              <th scope="col">Discount</th>
              <th scope="col">Bonus</th>
              <th scope="col">Amount Paid</th>
              <th scope="col">Amount Credited</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
