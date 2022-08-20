import React from "react";

// stylesheet
import "./styles.scss";

import { Input } from 'semantic-ui-react';

// React Bootstrap
import {Container, Col, Row} from "react-bootstrap";


export const Footer = ({props}) => {
  return (
    <div>
      <hr />
      <Container fluid>
        <div className="footer">
          <Row>
            <Col className="delivery">
              <span className="header">Delivery</span>
              <br />
              <span className="text">
                Self collect @ Bukit Panjang <br />
                Mrt Station
              </span>
            </Col>
            <Col className="note">
              <span className="header">Note</span>
              <br />
              <span className="text">Preorder at least 3 days in advance</span>
            </Col>
            <Col className="links">
              <span className="header">Links</span>
              <br />
              <span className="text">
                <a href="/">Home</a> <br />
                <a href="/about">About</a> <br />
                <a href="/products">Products</a> <br />
                <a href="/contact">Contact</a> <br />
              </span>
            </Col>
            <Col className="signup">
              <span className="header">Sign Up</span>
              <br />
              <span className="text">
                Receive the latest treats to your inbox <br /><br/>
                <Input transparent icon='long arrow alternate right' placeholder='Email' className="search" />           
                </span>
          </Col>
          </Row>

          <Row>
            <Col className="contact">
              <span className="header">Contact Details</span>
              <br />
              <span className="text">
                +65 8299 7408 <br />
                thespongeoven@hotmail.com <br />
              </span>
            </Col>
            <Col className="customer">
              <span className="header">Customer</span>
              <br />
              <span className="text">
                <a href="/payment">Payment</a> <br />
                <a href="/order">Order</a> <br />
                <a href="/transactions">Transaction</a> <br />
                <a href="/faq">FAQ</a> <br />
                <a href="/terms">Terms & Conditions</a>
              </span>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
