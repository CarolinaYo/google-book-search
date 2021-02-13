import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import { Input, SubmitBtn } from "../components/SearchForm";
import API from "../utils/API";

// import ResultList from "../components/ResultList/ResultList";

class Home extends Component {
  state = {
    books: [],
    search: "",
  };

  // Create function to search for books through Google API
  bookSearch = () => {
    API.getGoogleBooks(this.state.search)
      .then((res) => {
        console.log("This is res.data", res.data.items);
        this.setState({
          books: res.data.items,
          search: "",
        });
      })
      .catch((err) => console.log(err));
  };

  //   Create function to handle input data
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  //   Create function to handle form data submission
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.bookSearch();
  };

  //   saveGoogleBook = (currentBook) => {
  //     console.log("This is the current book", currentBook);
  //     API.saveBook({
  //       id: currentBook.id,
  //       title: currentBook.title,
  //       authors: currentBook.authors,
  //       description: currentBook.description,
  //       image: currentBook.image,
  //       link: currentBook.link,
  //     })
  //       .then((res) => console.log("Successful POST to DB!", res))
  //       .catch((err) => console.log("this is the error", err));
  //   };

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
                  placeholder="e.g Cookbook for Nerds"
                />
                <div>
                  <SubmitBtn onClick={this.handleFormSubmit} />
                </div>
              </form>
            </Col>
          </Row>
          {/* <ResultList /> */}
        </Container>
      </div>
    );
  }
}

export default Home;
