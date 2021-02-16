import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import { Input, SubmitBtn } from "../components/SearchForm";
import API from "../utils/API";

import Result from "../components/Result";

class Home extends Component {
  state = {
    books: [],
    search: "",
  };

  // Get books from google API
  bookSearch = () => {
    API.getGoogleBooks(this.state.search)
      .then((res) => {
        // console.log(res);
        console.log("res.data.items", res.data.items);
        this.setState({
          books: res.data.items,
          search: "",
        });
      })
      .catch((err) => console.log(err));
  };

  //Handle input data
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  //Handle form submision
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.bookSearch();
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Navbar />
          <Jumbotron />
          <Row>
            <Col size="md-8">
              <label>Search books by title</label>
              <form className="row g-3">
                <Input
                  value={this.state.search}
                  onChange={this.handleInputChange}
                  name="search"
                  placeholder="e.g Fancy Nancy"
                />
                <div>
                  <SubmitBtn onClick={this.handleFormSubmit} />
                </div>
              </form>
            </Col>
          </Row>
          {this.state.books.length ? (
            <Result searchResult={this.state.books}></Result>
          ) : (
            ((<br></br>), (<h5> NO RESULT TO DISPLAY </h5>))
          )}
        </Container>
      </div>
    );
  }
}

export default Home;
