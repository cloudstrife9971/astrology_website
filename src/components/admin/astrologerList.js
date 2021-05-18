import React, { Component } from "react";
import style from "./style.module.css";
import {Form ,Button,Container,Row,Col} from  "react-bootstrap"
import AstrologerItem from "./astrologerItem"
// import "../astrologers/style/style.css"
export default class AstrologerList extends Component {
  render() {
    return (
      <div className={style.astrologerList__container}>
        <h2>registered astrologer</h2>

      {/* <AstrologerItem></AstrologerItem> */}
    <Container>
      <Row>
      <Col><AstrologerItem></AstrologerItem></Col>
      <Col><AstrologerItem></AstrologerItem></Col>
      <Col><AstrologerItem></AstrologerItem></Col>
   </Row>
    </Container>
      </div>
    );
  }
}
