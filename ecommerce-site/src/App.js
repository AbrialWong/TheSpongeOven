import React from "react";
import { Route, Switch } from "react-router-dom";


// stylesheet
import "./default.scss";

// // External import files
// import "@libraries/external/import-libraries.js";

// // Internal import files
// import "@libraries/internal/import-libraries.js";

// layouts
import MainLayout from "./../src/layout/mainLayout.js";

// pages
import Home from "./pages/Homepage/homepage.js";
import Registration from "./pages/Registration/registration.js";

// Navbar
import Header from "./components/Header/index.js";

function App() {
  return (
    <div className="App">

<Switch>
    <Route exact path="/" render={()=> (
      <MainLayout>
        <Home />
      </MainLayout>
    )}/>
        <Route path="/registration" render={()=> (
      <MainLayout>
        <Registration />
      </MainLayout>
    )}/>
    
    </Switch>
    </div>
  );
}

export default App;

/*
import React from "react";
import { Route, Switch } from "react-router-dom";

// pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";

// layouts
import MainLayout from "./../src/layouts/MainLayout.js";
import HomepageLayout from "./../src/layouts/HomepageLayout.js";

import './default.scss';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path="/" render={()=> (
      <HomepageLayout>
        <Homepage />
      </HomepageLayout>
    )}/>
    <Route path="/registration" render={()=>(
      <MainLayout>
        <Registration />
      </MainLayout>
    )} />
    </Switch>
    </div>
  );
}

export default App;

*/