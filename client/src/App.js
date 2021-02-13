import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          {/* <Route exact path="/saved" component={Saved} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
