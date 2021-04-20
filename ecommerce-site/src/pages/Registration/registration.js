import React, { Component } from "react";

import "./../Registration/styles.scss";

// React Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//image
import register from "./../../asserts/register.jpg";
class Registration extends Component {
  render() {
    return (
      <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Registration
          </li>
        </ol>
      </nav>

      <Row>
    <Col>
    <img src={register} className="header"/>
    </Col>
    </Row>
    </div>
    );
  }
}

export default Registration;
