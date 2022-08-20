import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

// stylesheet
import "./default.scss";

// pages
import {Registration} from "./pages/Registration/registration.js";
import {Header} from "./components/Header/index";
import {Main} from "./components/Main/index";
import {Footer} from "./components/Footer/footer";
import {Copyright} from "./components/Copyright/copyright";

export const App = () => {
  return (
    <> 
      <Header/>
      <div>
        <Switch>
          <Route path="/" component={Main}/>
          {/* <Route path="/registration" component={Registration}/> */}
        </Switch>
      </div>
      <Footer/>
      <Copyright/>
    </>
  );
}

