import React, { Component } from "react";
import Slider from "react-slick";
import style from "./css/style.module.css";
import img from "./levi.jpg"
export default class Testimonials extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className={style.tstm__section}>
        <div className="container">
          <h2 className={style.tstm__title}> Hear From Our Customers </h2>
          <h3 className={style.tstm__subtitle}>
            Top Astrologers. 24*7 customer support. Happy to help{" "}
          </h3>
          <div>
            <Slider {...settings}>
              <div>
                <div className={style.tstm__card__container}>
                  <div className={style.tstm__card}>
                    <img className={style.tstm__card__img} src={img} alt="" />
                    <h4 className={style.tstm__card__title}>Pooja Tiwari </h4>
                    <p className={style.tstm__card__subtitle}>Dubai, UAE </p>
                    <p className={style.tstm__card__para}>
                      Brilliant user experience. From the interface to app to
                      ease of asking a query to speaking to well spoken and
                      experience astrologers. It was a delight. Have used many
                      astrology apps but this is something like Uber experience.
                      Great work
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className={style.tstm__card__container}>
                  <div className={style.tstm__card}>
                    <img className={style.tstm__card__img} src={img} alt="" />
                    <h4 className={style.tstm__card__title}>Pooja Tiwari </h4>
                    <p className={style.tstm__card__subtitle}>Dubai, UAE </p>
                    <p className={style.tstm__card__para}>
                      Brilliant user experience. From the interface to app to
                      ease of asking a query to speaking to well spoken and
                      experience astrologers. It was a delight. Have used many
                      astrology apps but this is something like Uber experience.
                      Great work
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className={style.tstm__card__container}>
                  <div className={style.tstm__card}>
                    <img className={style.tstm__card__img} src={img} alt="" />
                    <h4 className={style.tstm__card__title}>Pooja Tiwari </h4>
                    <p className={style.tstm__card__subtitle}>Dubai, UAE </p>
                    <p className={style.tstm__card__para}>
                      Brilliant user experience. From the interface to app to
                      ease of asking a query to speaking to well spoken and
                      experience astrologers. It was a delight. Have used many
                      astrology apps but this is something like Uber experience.
                      Great work
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className={style.tstm__card__container}>
                  <div className={style.tstm__card}>
                    <img className={style.tstm__card__img} src={img} alt="" />
                    <h4 className={style.tstm__card__title}>Pooja Tiwari </h4>
                    <p className={style.tstm__card__subtitle}>Dubai, UAE </p>
                    <p className={style.tstm__card__para}>
                      Brilliant user experience. From the interface to app to
                      ease of asking a query to speaking to well spoken and
                      experience astrologers. It was a delight. Have used many
                      astrology apps but this is something like Uber experience.
                      Great work
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className={style.tstm__card__container}>
                  <div className={style.tstm__card}>
                    <img className={style.tstm__card__img} src={img} alt="" />
                    <h4 className={style.tstm__card__title}>Pooja Tiwari </h4>
                    <p className={style.tstm__card__subtitle}>Dubai, UAE </p>
                    <p className={style.tstm__card__para}>
                      Brilliant user experience. From the interface to app to
                      ease of asking a query to speaking to well spoken and
                      experience astrologers. It was a delight. Have used many
                      astrology apps but this is something like Uber experience.
                      Great work
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className={style.tstm__card__container}>
                  <div className={style.tstm__card}>
                    <img className={style.tstm__card__img} src={img} alt="" />
                    <h4 className={style.tstm__card__title}>Pooja Tiwari </h4>
                    <p className={style.tstm__card__subtitle}>Dubai, UAE </p>
                    <p className={style.tstm__card__para}>
                      Brilliant user experience. From the interface to app to
                      ease of asking a query to speaking to well spoken and
                      experience astrologers. It was a delight. Have used many
                      astrology apps but this is something like Uber experience.
                      Great work
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
