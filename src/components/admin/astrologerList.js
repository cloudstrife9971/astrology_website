import React, { Component } from "react";
import style from "./style.module.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import AstrologerItem from "./astrologerItem";

export default class AstrologerList extends Component {
  render() {
    // console.log( this.props.AstrologerList)
    var List = this.props.AstrologerList.data
      ? this.props.AstrologerList.data.map(( item, key) => {
          return (
            <Col md={4} key={key}>
              <AstrologerItem  details={item}></AstrologerItem>
            </Col>
          );
        })
      : null;

    // console.log(List);
    return (
      <div className={style.astrologerList__container}>
        <h2>registered astrologer</h2>

        <Container>
          <Row>{List}</Row>
        </Container>
      </div>
    );
  }
}
