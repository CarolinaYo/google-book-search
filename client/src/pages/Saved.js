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

  render() {
    return (
      <div>
        <Container fluid>
          <Navbar />
          <Jumbotron />
          <Row>
            {this.state.savedBooks.length ? (
              <SavedBookList savedBooks={this.state.savedBooks}></SavedBookList>
            ) : (
              ((<br></br>), (<h5> YOUR LIBRARY IS EMPTY </h5>))
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Saved;
