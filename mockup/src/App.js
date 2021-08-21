import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Theme, { GlobalStyle } from "./assets/Theme";
import Home from "./views/Home";
import Test from "./views/Test";

const App = () => (
  <Router>
    <Theme>
      <GlobalStyle />
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
    </Theme>
  </Router>
);

export default App;
