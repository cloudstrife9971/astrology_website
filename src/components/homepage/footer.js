import React, { Component } from "react";
import "./css/common.css";
import twitter from "./iconfinder_Rounded_Twitter5_svg_5282551.png"
import facebook from "./iconfinder_Rounded_Facebook_svg_5282541.png"
import insta from "./iconfinder_Rounded_Instagram_svg_5282544.png"
import linkedin from "./iconfinder_Rounded_Linkedin2_svg_5282542.png"
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer__section">
        <div className="container">
          <div className="row">
            <div className="col-md">
             <div className='footer__item'>
              <ul>
                <li>
                  <a href="">about</a>
                </li>
                <li>
                  <a href="">how it works</a>
                </li>
                <li>
                  <a href="">success stories</a>
                </li>
              </ul>
              </div>
            </div>
            <div className="col-md">
             <div className='footer__item'>
              <ul>
                <li>
                  <a href="">experts</a>
                </li>
                <li>
                  <a href="">how it works</a>
                </li>
                <li>
                  <a href="">success stories</a>
                </li>
              </ul>
              </div>
            </div>
            <div className="col-md">
             <div className='footer__item'>
              <ul>
                <li>
                  <a href="">answers</a>
                </li>
                <li>
                  <a href="">how it works</a>
                </li>
                <li>
                  <a href="">success stories</a>
                </li>
              </ul>
              </div>
            </div>
            <div className="col-md">
             <div className='footer__item'>
              <ul>
                <li>
                  <a href="">support</a>
                </li>
                <li>
                  <a href="">how it works</a>
                </li>
                <li>
                  <a href="">success stories</a>
                </li>
              </ul>
              </div>
            </div>
            <div className="col-md">
             <div className='footer__item'>
              <ul>
                <li>
                  <a href="">follow</a>
                </li>
            <li className='footer__social-icons'>
                <a href=""><img src={twitter} alt=""/></a>
                <a href=""><img src={facebook} alt=""/></a>
                <a href="">   <img src={insta} alt=""/></a>
                <a href=""> <img src={linkedin} alt=""/></a>
                
             
               
            </li>
              </ul>
              </div>
            </div>
            
            
      
        
          </div>
        </div>
      </footer>
    );
  }
}
