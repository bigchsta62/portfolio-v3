import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Nav />
        <Route exact path={"/"}>
          <About />
        </Route>
      <Switch>
        <Route exact path="/projects">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;
