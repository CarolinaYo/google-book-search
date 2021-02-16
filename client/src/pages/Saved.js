import React, { Component } from "react";
import API from "../utils/API";
// import Result from "../components/Result";

import { Container, Row, Col } from "../components/Grid";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";

class Saved extends Component {
  state = {
    savedBooks: [],
  };
}

export default Saved;
