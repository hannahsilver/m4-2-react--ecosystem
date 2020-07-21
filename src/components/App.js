import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import { createGlobalStyle } from "styled-components";

const App = (props) => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            Homepage
          </Route>
          <Route exact path="/about">
            About
          </Route>
          <Route exact path="/items/:itemId">
            Items
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
