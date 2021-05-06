import React, { Component } from "react";

import "./../Registration/styles.scss";

// React Bootstrap
import {Col, Row} from 'react-bootstrap';

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
    <img src={register} alt="register" className="header"/>
    </Col>
    </Row>
    </div>
    );
  }
}

export default Registration;
