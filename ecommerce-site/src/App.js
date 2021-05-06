import React from "react";
import { Route, Switch } from "react-router-dom";

// stylesheet
import "./default.scss";

// layouts
import MainLayout from "./../src/layout/mainLayout.js";

// pages
import Home from "./pages/Homepage/homepage.js";
import Registration from "./pages/Registration/registration.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Home />
            </MainLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
