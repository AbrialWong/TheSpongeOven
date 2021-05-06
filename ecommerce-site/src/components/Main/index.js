import React from "react";
import {Link} from "react-router-dom";

// stylesheet
import "./styles.scss";

// React Bootstrap
import {Container,Col,Row} from 'react-bootstrap';

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
    <img src={category} alt="category" className="header"/>
    </Col>
    </Row>

    <Row>
      <Col>
      <Link to="/bread">
      <span className="button" className="button">
      <img src={carrot} alt="bread" className="d-block w-100"/>
      <span className="category">Bread</span>
      </span>
      </Link>
      </Col>
      <Col>
      <Link to="/cheesecake">
      <span className="button" className="button">
      <img src={carrot} alt="cheesecake" className="d-block w-100"/>
      <span className="category">Cheesecake</span>
      </span>
      </Link>
      </Col>
      <Col>
      <Link to="/tarts">
      <span className="button" className="button">
      <img src={carrot} alt="tarts" className="d-block w-100"/>
      <span className="category">Tarts</span>
      </span>
      </Link>
      </Col>
      <Col>
      <Link to="/tarts">
      <span className="button" className="button">
      <img src={carrot} alt="minitarts" className="d-block w-100"/>
      <span className="category">Mini Tarts</span>
      </span>
      </Link>
      </Col>
      <Col>
      <Link to="/entremets"> 
      <span className="button" className="button">
      <img src={carrot} alt="entremets" className="d-block w-100"/>
      <span className="category">Entremets</span>
      </span>
      </Link>
      </Col>

    </Row>
    
    </div>
  );
};

export default Main;

