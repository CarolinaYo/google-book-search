import React, { Component } from "react";
import API from "../utils/API";
import SavedBooks from "../components/SavedBooks";

import { Container, Row } from "../components/Grid";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";

class Saved extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount = () => {
    this.getBooks();
  };

  getBooks = () => {
    API.getSavedBooks()
      .then((res) => {
        console.log("Saved item:", res);
        this.setState({ savedBooks: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Navbar />
          <Jumbotron />
          <Row>
            {this.state.savedBooks.length ? (
              <SavedBooks
                savedBooks={this.state.savedBooks}
                getBooks={this.getBooks}
              ></SavedBooks>
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
