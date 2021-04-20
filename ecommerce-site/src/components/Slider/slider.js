import React, { useState } from "react";
import {Link} from "react-router-dom";

import "./styles.scss";

// // External import files
// import "@components/libraries/external/import-libraries.js";

// // Internal import files
// import "@components/libraries/internal/import-libraries.js";

// import for React-Bootstrap Libraries
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import for images
import carrot from "./../../asserts/carrot.jpg";
import cheesecake from "./../../asserts/cheesecake.jpg";
import pear from "./../../asserts/pear.jpg";

function ProductSliders() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      
      <Carousel.Item>
        <div className="box">
        <Link to="/bread"> 

          <Row> 
            <Col>
              <img src={carrot} className="d-block w-100" alt="1" />
            </Col>

            <Col className="slider-description">
              <span className="header"> Carrot Cake </span> <br />
              <span className="text1">Available in box of 6 pcs</span> <br />
              <span className="text2">
                Best eaten when microwaved for 30 seconds
              </span>
              <br />
              <span className="text3">
                Preorder at least 3 days in advanced
              </span>
              
            </Col>
            
          </Row>
          </Link>
        </div>
      </Carousel.Item>
      

      <Carousel.Item>
        <div className="box">
        <Link to="/cheesecake"> 
          <Row>
            <Col>
              <img src={cheesecake} className="d-block w-100" alt="1" />
            </Col>

            <Col className="slider-description">
              <span className="header"> Sandwich Cheesecake </span> <br />
              <span className="text1">Available in box of 12 pcs</span> <br />
              <span className="text2">
               A perfect gift this christmas season.
              </span>
              <br />
              <span className="text3">
                Preorder at least 7 days in advanced
              </span>
            </Col>
          </Row>
          </Link>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="box">
        <Link to="/tart"> 
          <Row>
            <Col>
              <img src={pear} className="d-block w-100" alt="1" />
            </Col>

            <Col className="slider-description">
              <span className="header"> Pear Peach Tart </span> <br />
              <span className="text1">Available in mini & regular size</span> <br />
              <span className="text2">
                A refreshing tangy tart with a hint of Earl Grey.
              </span>
              <br />
              <span className="text3">
                Preorder at least 3 days in advanced
              </span>
            </Col>
          </Row>
          </Link>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

//   render(<ControlledCarousel />);

export default ProductSliders;
