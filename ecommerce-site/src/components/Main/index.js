import React from "react";
import {Link} from "react-router-dom";

// stylesheet
import "./styles.scss";

// React Bootstrap
import {Container,Col,Row} from 'react-bootstrap';

// image
import IMAGES from "./../../asserts/index.js";

export const Main = () => {
  return (
    <div>
    <Row>
    <Col>
    <img src={IMAGES.category} alt="category" className="header"/>
    </Col>
    </Row>

    <Row>
      <Col>
      <Link to="/bread">
      <span className="button">
      <img src={IMAGES.carrot} alt="bread" className="d-block w-100"/>
      <span className="category">Bread</span>
      </span>
      </Link>
      </Col>
      <Col>
      <Link to="/cheesecake">
      <span className="button">
      <img src={IMAGES.carrot} alt="cheesecake" className="d-block w-100"/>
      <span className="category">Cheesecake</span>
      </span>
      </Link>
      </Col>
      <Col>
      <Link to="/tarts">
      <span className="button">
      <img src={IMAGES.carrot} alt="tarts" className="d-block w-100"/>
      <span className="category">Tarts</span>
      </span>
      </Link>
      </Col>
      <Col>
      <Link to="/tarts">
      <span className="button">
      <img src={IMAGES.carrot} alt="minitarts" className="d-block w-100"/>
      <span className="category">Mini Tarts</span>
      </span>
      </Link>
      </Col>
      <Col>
      <Link to="/entremets"> 
      <span className="button">
      <img src={IMAGES.carrot} alt="entremets" className="d-block w-100"/>
      <span className="category">Entremets</span>
      </span>
      </Link>
      </Col>

    </Row>
    
    </div>
  );
};


