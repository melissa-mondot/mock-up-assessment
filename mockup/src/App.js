import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Theme, { GlobalStyle } from "./assets/Theme";
import { Header, Footer } from "./components/layout";
import { Home, Test } from "./components/views";

const App = () => (
  <Router>
    <Theme>
      <GlobalStyle />
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
      <Footer />
    </Theme>
  </Router>
);

export default App;
