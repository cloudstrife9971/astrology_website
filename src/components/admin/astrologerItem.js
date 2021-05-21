import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import style from "./style.module.css";
// import image from "../astrologers/how-to-draw-levi-easy_5e4cd67f47d525.72997937_105024_5_3.png";
import image from "./v3_0452616.jpg";
export default class AstrologerItem extends Component {
  render() {
    console.log(this.props.details);
    var astrologerDetails = this.props.details;
    // console.log(astrologerDetails.language.toString())
    return (
      <Link to="/admin/update" className={style.astrologerCard__link}>
        <div className={style.astrologerCard__container}>
          <div className={style.astrologerCard__img}>
            <img src={image} alt="" />
          </div>
          <div className={style.astrologerCard__details}>
            <div>
              name <span>{astrologerDetails.name}</span>
            </div>
            <div>
              email <span>{astrologerDetails.email}</span>
            </div>
            <div>
              phoneNumber <span>{astrologerDetails.phoneNumber}</span>
            </div>
            <div>
              gender <span>{astrologerDetails.gender}</span>
            </div>
            <div>
              language
              <span>{astrologerDetails.language.toString()}</span>
            </div>
            <div>
              expertise <span>{astrologerDetails.expertise.toString()}</span>
            </div>
            <div>
              yearOfExperience <span>{astrologerDetails.yearOfExperience}</span>
            </div>
            <div>
              ratePerMinute <span>{astrologerDetails.ratePerMinute}</span>
            </div>
            <div>
              rating <span>{astrologerDetails.rating}</span>
            </div>
            <div>
              status <span>{astrologerDetails.status}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
