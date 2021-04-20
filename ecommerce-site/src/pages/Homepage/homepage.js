import React from "react";

// stylesheet
import "./../Homepage/styles.scss";

// // External import files
// import "@libraries/external/import-libraries.js";

// // Internal import files
// import "@libraries/internal/import-libraries.js";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// image
import category from "./../../asserts/category.jpg";
import carrot from "./../../asserts/carrot.jpg";
import cheesecake from "./../../asserts/cheesecake.jpg";
import mini from "./../../asserts/mini.jpg";
import pear from "./../../asserts/pear.jpg";

//pages
import Main from "./../../components/Main/index.js";

// Sliders
import ProductSliders from "./../../components/Slider/slider";


const Home = (props) => {
  return (
    <div className="homepage">
        <Main />
      </div>
     
  );
};

export default Home;

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
