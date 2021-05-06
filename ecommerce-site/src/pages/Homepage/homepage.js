import React from "react";

// stylesheet
import "./../Homepage/styles.scss";

//pages
import Main from "./../../components/Main/index.js";

const Home = (props) => {
  return (
    <div className="homepage">
        <Main />
      </div>
     
  );
};

export default Home;


