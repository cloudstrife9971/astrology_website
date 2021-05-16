import React, { Component, Fragment } from "react";
import horoscope from "./Gemini.png"

export default class Horoscope extends Component {
  render() {
    return (
      <Fragment>
        <section className='horoscope-section'>
          <div className="container">
            <h2 className='horoscope__title'>Free Daily Horoscopes</h2>
            <div className="row horoscope-sign-container">
              <div className="col-12 col-lg-3 test">
                <div className="row">
                  <div className="col-4 test-2">
                      <div className='horoscope-item'>
                          <div className='horoscope-item__img-container'>
                          <img className='horoscope-item__img' src={horoscope} alt=""/>
                          </div>
                          <div className='horoscope-item__container'>
                              <h3 className='horoscope-item__title'>aries</h3>
                              <div className='horoscope-item__date'>23 oct -24 nov</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-4 test-2">
                      <div className='horoscope-item'>
                      <div className='horoscope-item__img-container'>
                          <img className='horoscope-item__img' src={horoscope} alt=""/>
                          </div>
                          <div className='horoscope-item__container'>
                              <h3 className='horoscope-item__title'>taurus </h3>
                              <div className='horoscope-item__date'>23 oct -24 nov</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-4 test-2">
                      <div className='horoscope-item'>
                      <div className='horoscope-item__img-container'>
                          <img className='horoscope-item__img' src={horoscope} alt=""/>
                          </div>
                          <div className='horoscope-item__container'>
                              <h3 className='horoscope-item__title'>gemini </h3>
                              <div className='horoscope-item__date'>23 oct -24 nov</div>
                          </div>
                      </div>
                  </div>
             
                </div>
              </div>
              <div className="col-12 col-lg-3 test">
                <div className="row">
                  <div className="col-4 test-2">
                      <div className='horoscope-item'>
                          <div className='horoscope-item__img-container'>
                          <img className='horoscope-item__img' src={horoscope} alt=""/>
                          </div>
                          <div className='horoscope-item__container'>
                              <h3 className='horoscope-item__title'>cancer </h3>
                              <div className='horoscope-item__date'>23 oct -24 nov</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-4 test-2">
                      <div className='horoscope-item'>
                      <div className='horoscope-item__img-container'>
                          <img className='horoscope-item__img' src={horoscope} alt=""/>
                          </div>
                          <div className='horoscope-item__container'>
                              <h3 className='horoscope-item__title'>leo</h3>
                              <div className='horoscope-item__date'>23 oct -24 nov</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-4 test-2">
                      <div className='horoscope-item'>
                      <div className='horoscope-item__img-container'>
                          <img className='horoscope-item__img' src={horoscope} alt=""/>
                          </div>
                          <div className='horoscope-item__container'>
                              <h3 className='horoscope-item__title'>virgo </h3>
                              <div className='horoscope-item__date'>23 oct -24 nov</div>
                          </div>
                      </div>
                  </div>
             
                </div>
              </div>
              <div className="col-12 col-lg-3 test">
                <div className="row">
                  <div className="col-4 test-2">
                      <div className='horoscope-item'>
                          <div className='horoscope-item__img-container'>
                          <img className='horoscope-item__img' src={horoscope} alt=""/>
                          </div>
                          <div className='horoscope-item__container'>
                              <h3 className='horoscope-item__title'>libra </h3>
                              <div className='horoscope-item__date'>23 oct -24 nov</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-4 test-2">
                      <div className='horoscope-item'>
                      <div className='horoscope-item__img-container'>
                          <img className='horoscope-item__img' src={horoscope} alt=""/>
                          </div>
                          <div className='horoscope-item__container'>
                              <h3 className='horoscope-item__title'>scorpio </h3>
                              <div className='horoscope-item__date'>23 oct -24 nov</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-4 test-2">
                      <div className='horoscope-item'>
                      <div className='horoscope-item__img-container'>
                          <img className='horoscope-item__img' src={horoscope} alt=""/>
                          </div>
                          <div className='horoscope-item__container'>
                              <h3 className='horoscope-item__title'>sagittarius</h3>
                              <div className='horoscope-item__date'>23 oct -24 nov</div>
                          </div>
                      </div>
                  </div>
             
                </div>
              </div>
              <div className="col-12 col-lg-3 test">
                <div className="row">
                  <div className="col-4 test-2">
                      <div className='horoscope-item'>
                          <div className='horoscope-item__img-container'>
                          <img className='horoscope-item__img' src={horoscope} alt=""/>
                          </div>
                          <div className='horoscope-item__container'>
                              <h3 className='horoscope-item__title'>capricorn</h3>
                              <div className='horoscope-item__date'>23 oct -24 nov</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-4 test-2">
                      <div className='horoscope-item'>
                      <div className='horoscope-item__img-container'>
                          <img className='horoscope-item__img' src={horoscope} alt=""/>
                          </div>
                          <div className='horoscope-item__container'>
                              <h3 className='horoscope-item__title'>aquarius</h3>
                              <div className='horoscope-item__date'>23 oct -24 nov</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-4 test-2">
                      <div className='horoscope-item'>
                      <div className='horoscope-item__img-container'>
                          <img className='horoscope-item__img' src={horoscope} alt=""/>
                          </div>
                          <div className='horoscope-item__container'>
                              <h3 className='horoscope-item__title'>pisces</h3>
                              <div className='horoscope-item__date'>23 oct -24 nov</div>
                          </div>
                      </div>
                  </div>
             
                </div>
              </div>
          
     
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
