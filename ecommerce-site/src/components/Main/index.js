import React from "react";
import {Link} from "react-router-dom";

// stylesheet
import "./styles.scss";

// // External import files
// import "@libraries/external/import-libraries.js";

// // Internal import files
// import "@libraries/internal/import-libraries.js";

// React Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// image
import category from "./../../asserts/category.jpg";
import carrot from "./../../asserts/carrot.jpg"; 
import cheesecake from "./../../asserts/cheesecake.jpg"; 
import mini from "./../../asserts/mini.jpg"; 
import pear from "./../../asserts/pear.jpg"; 


const Main = props => {
  return (
    <div>
    <Row>
    <Col>
    <img src={category} className="header"/>
    </Col>
    </Row>

    <Row>
      <Col>
      <Link to="/bread">
      <span className="button" className="button">
      <img src={carrot} className="d-block w-100"/>
      <span className="category">Bread</span>
      </span>
      </Link>
      </Col>
      <Col>
      <Link to="/cheesecake">
      <span className="button" className="button">
      <img src={carrot} className="d-block w-100"/>
      <span className="category">Cheesecake</span>
      </span>
      </Link>
      </Col>
      <Col>
      <Link to="/tarts">
      <span className="button" className="button">
      <img src={carrot} className="d-block w-100"/>
      <span className="category">Tarts</span>
      </span>
      </Link>
      </Col>
      <Col>
      <Link to="/tarts">
      <span className="button" className="button">
      <img src={carrot} className="d-block w-100"/>
      <span className="category">Mini Tarts</span>
      </span>
      </Link>
      </Col>
      <Col>
      <Link to="/entremets"> 
      <span className="button" className="button">
      <img src={carrot} className="d-block w-100"/>
      <span className="category">Entremets</span>
      </span>
      </Link>
      </Col>

    </Row>
    
    </div>
  );
};

export default Main;

/*
import React from "react";

import "./../Homepage";

import Directory from "./../../components/Directory";

const Homepage = props => {
  return (
  <section className="homepage">
  <Directory />
  </section>
  );
};

export default Homepage;
*/