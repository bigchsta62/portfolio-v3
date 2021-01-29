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
        <Route exact path={"/portfolio-v3/"}>
          <About />
        </Route>
      <Switch>
        <Route exact path="/portfolio-v3/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/portfolio-v3/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;
