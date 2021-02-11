import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
