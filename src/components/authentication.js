import React, { Component } from "react";

export default class Authentication extends Component {
  render() {
    return (
      <section>
        <div className="custom-overlay">
          <div className="container">
            <div className="login-card">
              <div className="row">
                <div className="col-lg-5 d-none d-lg-block ">
                  <div className="login-img-container">
                    <p className="login-img-txt"></p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="login-form-container">
                    <h2 className="login-form-heading">LOGIN/SIGN UP</h2>
                    <h3 className="login-form-subheading">
                      Please enter your mobile number to Login/Sign Up on
                      Astroyogi
                    </h3>
                    <div className="login-input-container">
                      <form class="row g-3">
                        <div class="row g-3">
                          <div class="col-sm-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="91(IN)"
                              aria-label="City"
                            />
                          </div>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Phone Number"
                              aria-label="State"
                            />
                          </div>
                        <div className='container'>
                        <div className='row'>
                            <div className='col-3'></div>
                            <div className='col-9 enter-no'>Enter your 10 digit mobile number</div>
                        </div>
                        </div>
                        </div>

                        <div class="col-12">
                          <button type="submit" class="btn btn-primary custom-submit-btn">
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                    <p className='terms'>
                      By proceeding, I Agree to
                      <span >Terms and Conditions</span>&amp
                      <span>Privacy Policy</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
