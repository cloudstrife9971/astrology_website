import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import style from "./style.module.css";
// import image from "../astrologers/how-to-draw-levi-easy_5e4cd67f47d525.72997937_105024_5_3.png";
import image from "./v3_0452616.jpg";
export default class AstrologerItem extends Component {
  render() {
    return (
      <Link to="/admin/update" className={style.astrologerCard__link}>
        <div className={style.astrologerCard__container}>
          <div className={style.astrologerCard__img}>
            <img src={image} alt="" />
          </div>
          <div className={style.astrologerCard__details}>
            <div>
              name <span>shashank</span>
            </div>
            <div>
              email <span>shashanksingh42@gmail.com</span>
            </div>
            <div>
              phoneNumber <span>9971441252</span>
            </div>
            <div>
              gender <span>male</span>
            </div>
            <div>
              language <span>hindi , english</span>
            </div>
            <div>
              expertise <span>taror,vedic,spanish,maya</span>
            </div>
            <div>
              yearOfExperience <span>4</span>
            </div>
            <div>
              ratePerMinute <span>1000000</span>
            </div>
            <div>
              rating <span>5</span>
            </div>
            <div>
              status <span>online</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
