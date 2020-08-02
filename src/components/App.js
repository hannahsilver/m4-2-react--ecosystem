import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import ItemDetails from "./ItemDetails";
import GlobalStyle from "./GlobalStyle";

const App = (props) => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage sellers={props.sellers} items={props.items} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/items/:itemId">
            <ItemDetails />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
