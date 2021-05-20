import React, { Component, Fragment } from "react";
import OtpInput from "react-otp-input";
import config from "../config.json";
import axios from "axios";
export default class Authentication extends Component {
  state = { otp: "", otpshow: false, countryCode: null, phoneNumber: null };
  handleOTPChange = (otp) => {
    this.setState({ otp });
  };
  handleChangeReset = () => {
    this.setState({ otpshow: false });
  };
  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = (event) => {
    event.preventDefault();
    const otp = {
      phoneNumber: this.state.phoneNumber,
      otp: this.state.otp,
    };

    
    axios.post(`${config.serverURL}users/verifyOTP`, { ...otp })
      .then(res => {
        // console.log(res);
        // console.log(res.data);
      })

  };
  handleSubmit = (event) => {
    event.preventDefault();
    const phoneNumber = {
      phoneNumber: this.state.phoneNumber,
    };

    axios
      .post(`${config.serverURL}users/loginRequest`, { ...phoneNumber })
      .then((res) => {
        this.setState({ otpshow: true });
      });
  };

  render() {
    // console.log(this.state.otpshow);
    const showHideClassName = this.props.show
      ? "overlay__section display-block"
      : "overlay__section display-none";
    return (
      <Fragment>
        <section className={showHideClassName}>
          <div className="custom-overlay">
            <div className="login-card">
              <div className="row">
                <div className="col-lg-5 d-none d-lg-block ">
                  <div className="login-img-container">
                    <p className="login-img-txt"></p>
                  </div>
                </div>
                <div className="col-lg-7">
                  {this.state.otpshow ? null : (
                    <div className="login-form-container">
                      <button
                        className="custom-cross-btn"
                        onClick={this.props.hideModal}
                      ></button>
                      <h2 className="login-form-heading">LOGIN/SIGN UP</h2>
                      <h3 className="login-form-subheading">
                        Please enter your mobile number to Login/Sign Up on
                        Astroyogi
                      </h3>
                      <div className="login-input-container">
                        <form class="row g-3" onSubmit={this.handleSubmit}>
                          <div class="row g-3">
                            <div class="col-sm-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="91(IN)"
                                aria-label="City"
                                onChange={this.handlechange}
                                name="countryCode"
                              />
                            </div>
                            <div class="col-sm-9">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Phone Number"
                                aria-label="State"
                                onChange={this.handlechange}
                                name="phoneNumber"
                              />
                            </div>
                            <div className="container">
                              <div className="row">
                                <div className="col-3"></div>
                                <div className="col-9 enter-no">
                                  Enter your 10 digit mobile number
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-12">
                            <button
                              type="submit"
                              class="btn btn-primary custom-submit-btn"
                            >
                              Sign in
                            </button>
                          </div>
                        </form>
                      </div>
                      <p className="terms">
                        By proceeding, I Agree to
                        <span>Terms and Conditions</span>&amp
                        <span>Privacy Policy</span>
                      </p>
                    </div>
                  )}
                  {this.state.otpshow ? (
                    <div className="login-form-container">
                      <button
                        className="custom-cross-btn"
                        onClick={() => {
                          this.handleChangeReset();
                          this.props.hideModal();
                        }}
                      ></button>
                      <h2 className="login-form-heading">Enter OTP</h2>
                      <p className="login-form-subheading">
                        OTP has been sent to you on your mobile number
                      </p>
                      <div className="enter-otp">Enter OTP</div>
                      <div className="opt-input-container">
                        <OtpInput
                          value={this.state.otp}
                          onChange={this.handleOTPChange}
                          numInputs={4}
                          isInputNum={true}
                        />
                      </div>
                      <div className="otp-issue-container">
                        <div className="resend-otp">
                          <span>Didn't receive the SMS? </span>
                          <a href="">Resend</a>
                        </div>
                        <div className="resend-otp-call">
                          <span>Having trouble receiving SMS? </span>
                          <a href="">Resend OTP by Call</a>
                        </div>
                      </div>
                      <button
                        className="custom-submit-btn"
                        onClick={this.handleClick}
                      >
                        VERIFY OTP
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
