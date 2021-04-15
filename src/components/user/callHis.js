import React, { Component } from "react";
import styles from "./user.module.css";
export default class Callhistory extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table class="table table-bordered">
          <thead className="table-light">
            <tr>
              <th scope="col">Date &amp; Time</th>
              <th scope="col">Session ID</th>
              <th scope="col">Call Log ID</th>
              <th scope="col">Astrologer</th>
              <th scope="col">Per Min Charges</th>
              <th scope="col">Call Duration</th>
              <th scope="col">Amount Charged</th>
              <th scope="col">Reviews</th>
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
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}