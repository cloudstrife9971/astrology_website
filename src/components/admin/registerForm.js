import React, { Component } from "react";
import style from "./style.module.css";
import { Form, Button } from "react-bootstrap";
import config from "../../config.json";
import axios from "axios";
export default class RegisterForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target;

    var astrologer = {
      // name: null,
      // email: null,
      // phoneNumber: "9971441252",
      // gender: null,
      // language: null,
      // expertise: null,
      // yearOfExperience: null,
      // ratePerMinute: null,

      // rating: null,
      // status: null,

      name: "shashank",
      email: "shashanksingh42@gmail.com",
      phoneNumber: "9971441288",
      password: "123",
      gender: "male",
      language: ["hindi", "english"],
      expertise: ["expertise", "expertise"],
      yearOfExperience: 1.4,
      ratePerMinute: "100",

      // phoneNumber : "9355539000",
      // password : "123",
      // name : "Guru ast",
      // email : "ast@gmail.co",
      // gender : "Male",
      // language : ["hindi", "english"],
      // expertise : ["expertise","expertise"],
      // yearOfExperience : 1.4,
      // ratePerMinute : "100"
    };

    axios
      .post(`${config.serverURL}astrologer/register`, { ...astrologer })
      .then((res) => {
        this.props.Pushdata(astrologer)
        // console.log(res);
        // console.log(res.data);
      });
  };

  render() {
    return (
      <div className={style.registerForm__container}>
        <h2>register astrologers</h2>
        <Form onSubmit={this.handleSubmit}>
          {/* <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Astrologer photo" />
          </Form.Group> */}

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Phone Number" />
          </Form.Group>

          <Form.Group controlId="formBasicGender">
            <Form.Label>Gender</Form.Label>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Male"
                  name="Male"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="Female"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form.Group>

          <Form.Group controlId="formBasicLanguage">
            <Form.Label>Language</Form.Label>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Hindi"
                  name="Hindi"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="English"
                  name="groEnglishup1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Etc"
                  type={type}
                  id={`inline-${type}-3`}
                />
                <Form.Check
                  inline
                  label="Etc"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Form.Group>

          <Form.Group controlId="formBasicExpertise">
            <Form.Label>Expertise</Form.Label>
            <Form.Control type="text" placeholder="Experise" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Year Of Experience</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicRate">
            <Form.Label>Rate Per Minute</Form.Label>
            <Form.Control type="tel" placeholder="Rate Per Minute" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Rating</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicStatus">
            <Form.Label>Status</Form.Label>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Available"
                  name="Available"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Not Available"
                  name="Not Available   "
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
